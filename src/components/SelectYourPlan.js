import ArcadeImg from "../images/icon-arcade.svg"
import AdvancedImg from "../images/icon-advanced.svg"
import ProImg from "../images/icon-pro.svg"
import Switch from "./Switch"

import PlanCard from "./PlanCard"
import { useState } from "react"

function SelectYourPlan() {
    const [isYearly, setIsYearly] = useState(false)

    return <div className="relative -top-[85px] mx-[20px] mb-[50px] px-[30px] pt-[25px] pb-[40px] bg-white rounded-xl">
        <div>
            <h1 className="text-[30px] font-bold">Select your plan</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">You have the option of monthly or yearly billing.</p>
            <div>
                <PlanCard image={ArcadeImg} planName="Arcade" billingOption="$9/mo-$90/yr" yearly />
                <PlanCard image={AdvancedImg} planName="Advanced" billingOption="$12/mo-$120/yr" yearly />
                <PlanCard image={ProImg} planName="Pro" billingOption="$15/mo-$150/yr" yearly />
            </div>
            <div className="flex justify-center items-center py-[15px] bg-[#f0f6ff] rounded-lg">
                <span className="mr-[20px]">Monthly</span>
                <Switch isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
                <span className="ml-[20px]">Yearly</span>
            </div>
        </div>
    </div>
}

export default SelectYourPlan