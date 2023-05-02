import AddonsCard from "./AddonsCard"
import addonData from "../data/addonData"
import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"

function AddOns() {
    const { setStep, isYearly, selectedAddons, setSelectedAddons } = useFormStepContext()

    useEffect(() => {
        setStep(3)
    }, [setStep])

    const handleAddonClick = (e) => {
        const clickedAddonName = e.currentTarget.children[1].children[1].children[0].textContent

        const selectedAddon = addonData.find(addon => addon.name === clickedAddonName)

        if (selectedAddons.length === 0) {
            setSelectedAddons([selectedAddon])
        } else {
            const shouldRemoveAddon = selectedAddons.some(addon => addon.name === selectedAddon.name)

            const newSelectedAddons = shouldRemoveAddon
                ? selectedAddons.filter(addon => addon.name !== selectedAddon.name)
                : [...selectedAddons, selectedAddon]

            setSelectedAddons(newSelectedAddons)
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
            handleAddonClick={handleAddonClick}
            selectedAddons={selectedAddons} />
    })

    return <div className="relative -top-[85px] mx-[20px] mb-[80px] px-[30px] py-[30px] bg-white rounded-xl">
        <h1 className="text-[32px] font-bold">Pick add-ons</h1>
        <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Add-ons help enhance your gaming experience.</p>
        <div className="mt-[30px]">
            {renderedAddons}
        </div>
    </div>
}

export default AddOns