import AddonsCard from "./AddonsCard"
import addonData from "../data/addonData"
import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"

function AddOns() {
    const { changeStep } = useFormStepContext()

    useEffect(() => {
        changeStep(3)
    }, [changeStep])

    const renderedAddons = addonData.map((addon) => {
        return <AddonsCard
            key={addon.id}
            id={addon.id}
            name={addon.name}
            description={addon.description}
            monthlyFee={addon.monthlyFee}
            yearlyFee={addon.yearlyFee} />
    })

    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl">
        <h1 className="text-[32px] font-bold">Pick add-ons</h1>
        <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Add-ons help enhance your gaming experience.</p>
        <div className="mt-[30px]">
            {renderedAddons}
        </div>
    </div>
}

export default AddOns