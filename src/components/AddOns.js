import AddonsCard from "./AddonsCard"
import addonData from "../data/addonData"
import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import { useNavigate } from "react-router-dom"

function AddOns() {
    const { setStep, isYearly, selectedAddons, setSelectedAddons, anyFormErrors } = useFormStepContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (anyFormErrors) {
            navigate("/")
        }
        setStep(3)
    }, [setStep, anyFormErrors, navigate])

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

    return <div className="relative -top-[85px] mx-[20px] px-[30px] py-[30px] bg-white rounded-xl md:mx-[70px]
    lg:static lg:m-0 lg:pt-[50px] lg:rounded-none lg:rounded-tr-xl lg:h-[555px] lg:w-[600px]">
        <h1 className="text-[32px] font-bold lg:text-[40px]">Pick add-ons</h1>
        <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium lg:text-[18px]">Add-ons help enhance your gaming experience.</p>
        <div className="mt-[30px]">
            {renderedAddons}
        </div>
    </div>
}

export default AddOns