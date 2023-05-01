import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link } from "react-router-dom"

function FinishingUp() {
    const { changeStep, selectedPlan, isYearly, selectedAddons } = useFormStepContext()

    useEffect(() => {
        changeStep(4)
    }, [changeStep])

    const renderedAddons = selectedAddons.map((addon) => {
        return <div
            key={addon.id}
            className="flex justify-between items-center mb-[10px]">
            <span className="text-[#9699ab] font-medium">{addon.name}</span>
            <span className="font-medium">{isYearly ? `+$${addon.yearlyFee}/yr` : `+$${addon.monthlyFee}/mo`}</span>
        </div>
    })

    const totalFee = () => {
        const addonsFee = selectedAddons.reduce((acc, addon) => {
            return isYearly ? acc + addon.yearlyFee : acc + addon.monthlyFee
        }, 0)
        const planFee = selectedPlan.yearlyRate ? (isYearly ? selectedPlan.yearlyRate : selectedPlan.monthlyRate) : 0
        return Number(addonsFee) + Number(planFee)
    }

    return <div className="relative -top-[80px] mx-[20px] mb-[80px] px-[30px] py-[30px] bg-white rounded-xl">
        <div>
            <h1 className="text-[32px] font-bold">Finishing up</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Double-check everything looks OK before confirming.</p>
            <div className="mt-[20px] mb-[30px] px-[15px] py-[20px] bg-[#fafbff] rounded-xl">
                <div className="flex justify-between items-center mb-[20px] pb-[20px] border-b-2">
                    <div className="flex flex-col">
                        <span className="font-bold">{selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})</span>
                        <Link
                            className="text-[#9699ab] underline leading-none font-bold"
                            to="/select-your-plan">Change</Link>
                    </div>
                    <span className="font-bold">{selectedPlan.yearlyRate && (isYearly ? `$${selectedPlan.yearlyRate}/yr` : `$${selectedPlan.monthlyRate}/mo`)}</span>
                </div>
                <div>
                    {renderedAddons}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-[#9699ab] font-medium">Total ({isYearly ? "per year" : "per month"})</span>
                <span className="text-[#473dff] text-[20px] font-bold">{`+$${totalFee()}/mo`}</span>
            </div>

        </div>
    </div>
}

export default FinishingUp