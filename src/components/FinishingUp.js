import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link, useNavigate } from "react-router-dom"

function FinishingUp() {
    const { setStep, selectedPlan, isYearly, selectedAddons, anyFormErrors } = useFormStepContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (anyFormErrors) {
            navigate("/")
        }
        setStep(4)
    }, [setStep, anyFormErrors, navigate])

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

    return <div className="relative -top-[85px] mx-[20px] mb-[80px] px-[30px] py-[30px] bg-white rounded-xl
    xl:static xl:m-0 xl:pt-[50px] xl:rounded-none xl:rounded-tr-xl xl:h-[555px] xl:w-[600px]">
        <h1 className="text-[32px] font-bold xl:text-[40px]">Finishing up</h1>
        <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium xl:text-[18px]">Double-check everything looks OK before confirming.</p>
        <div className="mt-[20px] mb-[30px] px-[15px] py-[20px] bg-[#fafbff] rounded-xl">
            <div className="flex justify-between items-center mb-[20px] pb-[20px] border-b-2">
                <div className="flex flex-col">
                    <span className="font-bold">{selectedPlan.name} ({isYearly ? "Yearly" : "Monthly"})</span>
                    <Link
                        className="text-[#9699ab] underline leading-none font-bold hover:text-[#473dff]"
                        to="/select-your-plan">Change</Link>
                    {Object.keys(selectedPlan).length === 0 && <span className="text-red-500">*You need to select a plan*</span>}
                </div>
                <span className="font-bold">{selectedPlan.yearlyRate && (isYearly ? `$${selectedPlan.yearlyRate}/yr` : `$${selectedPlan.monthlyRate}/mo`)}</span>
            </div>
            <div>
                {renderedAddons}
            </div>
        </div>
        <div className="flex justify-between items-center ml-[15px]">
            <span className="text-[#9699ab] font-medium">Total ({isYearly ? "per year" : "per month"})</span>
            <span className="mr-[15px] text-[#473dff] text-[18px] font-bold">{`+$${totalFee()}${isYearly ? "/yr" : "/mo"}`}</span>
        </div>
    </div>
}

export default FinishingUp