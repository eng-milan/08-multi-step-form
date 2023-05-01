import AddonsCard from "./AddonsCard"
import addonData from "../data/addonData"
import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"

function AddOns() {
    const { changeStep, isYearly, selectedAddons, setAddons } = useFormStepContext()

    useEffect(() => {
        changeStep(3)
    }, [changeStep])

    const handleAddonClick = (e) => {
        const selectedAddon = addonData.filter((addon) => {
            return addon.name === e.currentTarget.children[1].children[1].children[0].textContent
        })
        if (selectedAddons.length === 0) {
            setAddons(selectedAddon)
        } else {
            const newSelectedAddons = selectedAddons.filter((addon) => {
                return addon.name !== selectedAddon[0].name
            })
            const shouldRemoveAddon = selectedAddons.some((addon) => {
                return addon.name === selectedAddon[0].name
            })
            if (shouldRemoveAddon) {
                setAddons(newSelectedAddons)
            } else {
                setAddons([...selectedAddons, selectedAddon[0]])
            }
        }
    }

    const renderedAddons = addonData.map((addon) => {
        return <AddonsCard
            key={addon.id}
            id={addon.id}
            name={addon.name}
            description={addon.description}
            monthlyFee={addon.monthlyFee}
            yearlyFee={addon.yearlyFee}
            isYearly={isYearly}
            handleAddonClick={handleAddonClick} />
    })

    return <div className="relative -top-[80px] mx-[20px] mb-[80px] px-[30px] py-[30px] bg-white rounded-xl">
        <h1 className="text-[32px] font-bold">Pick add-ons</h1>
        <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Add-ons help enhance your gaming experience.</p>
        <div className="mt-[30px]">
            {renderedAddons}
        </div>
    </div>
}

export default AddOns