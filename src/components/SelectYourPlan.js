import { useState } from "react"
import Switch from "./Switch"
import PlanCard from "./PlanCard"
import plansData from "../data/plansData"

function SelectYourPlan() {
    const [isYearly, setIsYearly] = useState(false)

    const renderedPlanCards = plansData.map((plan) => {
        return <PlanCard
            key={plan.name}
            image={plan.image}
            planName={plan.name}
            monthlyRate={plan.monthlyRate}
            yearlyRate={plan.yearlyRate}
            isYearly={isYearly} />
    })

    return <div className="relative -top-[85px] mx-[20px] -mb-[50px] px-[30px] pt-[35px] pb-[40px] bg-white rounded-xl border-4">
        <div>
            <h1 className="text-[30px] font-bold">Select your plan</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">You have the option of monthly or yearly billing.</p>
            <div className="mt-[30px]">
                {renderedPlanCards}
            </div>
            <div className="flex justify-center items-center mt-[30px] py-[10px] bg-[#f0f6ff] rounded-lg">
                <span className={`mr-[25px] text-[20px] font-bold ${isYearly && "text-[#9699ab]"}`}>Monthly</span>
                <Switch isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
                <span className={`ml-[25px] text-[20px] font-bold ${!isYearly && "text-[#9699ab]"}`}>Yearly</span>
            </div>
        </div>
    </div>
}

export default SelectYourPlan