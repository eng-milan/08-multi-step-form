import { createContext, useState } from "react";

const FormStepContext = createContext()

function Provider({ children }) {
    const [step, setStep] = useState(1)
    const [selectedPlan, setSelectedPlan] = useState({})
    const [isYearly, setIsYearly] = useState(false)

    const contextValues = {
        step,
        changeStep: (newStep) => {
            setStep(newStep)
        },
        selectedPlan,
        setPlan: (newPlan) => {
            setSelectedPlan(newPlan)
        },
        isYearly,
        setIsYearly: () => {
            setIsYearly(!isYearly)
        }
    }

    return <FormStepContext.Provider value={contextValues}>
        {children}
    </FormStepContext.Provider>
}

export { Provider }
export default FormStepContext