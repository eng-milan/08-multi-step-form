import { useEffect } from "react"
import Switch from "./Switch"
import PlanCard from "./PlanCard"
import plansData from "../data/plansData"
import useFormStepContext from "../hooks/use-form-step-context"
import { useNavigate } from "react-router-dom"

function SelectYourPlan() {
    const { setStep, selectedPlan, setSelectedPlan, isYearly, setIsYearly, anyFormErrors } = useFormStepContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (anyFormErrors) {
            navigate("/")
        }
        setStep(2)
    }, [setStep, anyFormErrors, navigate])

    const handlePlanClick = (e) => {
        const chosenPlan = plansData.filter((plan) => {
            return plan.name === e.currentTarget.children[1].children[0].textContent
        })
        setSelectedPlan(chosenPlan[0])
    }

    const renderedPlanCards = plansData.map((plan) => {
        return <PlanCard
            key={plan.name}
            image={plan.image}
            planName={plan.name}
            monthlyRate={plan.monthlyRate}
            yearlyRate={plan.yearlyRate}
            isYearly={isYearly}
            handlePlanClick={handlePlanClick}
            selectedPlan={selectedPlan} />
    })

    return <div className="relative -top-[85px] mx-[20px] px-[30px] pt-[35px] pb-[40px] bg-white rounded-xl md:mx-[70px]
    lg:static lg:m-0 lg:pt-[50px] lg:rounded-none lg:rounded-tr-xl lg:h-[555px] lg:w-[600px]">
        <div>
            <h1 className="text-[30px] font-bold lg:text-[40px]">Select your plan</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium lg:text-[18px]">You have the option of monthly or yearly billing.</p>
            <div className="mt-[30px] lg:flex lg:justify-between">
                {renderedPlanCards}
            </div>
            <div className="flex justify-center items-center mt-[30px] py-[10px] bg-[#f0f6ff] rounded-xl">
                <span className={`mr-[25px] text-[20px] font-medium ${isYearly && "text-[#9699ab]"}`}>Monthly</span>
                <Switch isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
                <span className={`ml-[25px] text-[20px] font-medium ${!isYearly && "text-[#9699ab]"}`}>Yearly</span>
            </div>
        </div>
    </div>
}

export default SelectYourPlan