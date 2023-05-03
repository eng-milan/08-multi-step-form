import { createContext, useState } from "react";

const FormStepContext = createContext()

function Provider({ children }) {
    const [step, setStep] = useState(1)
    const [personalInformation, setPersonalInformation] = useState({ name: "", email: "", tel: "" })
    const [selectedPlan, setSelectedPlan] = useState({})
    const [isYearly, setIsYearly] = useState(false)
    const [selectedAddons, setSelectedAddons] = useState([])
    const [anyFormErrors, setAnyFormErrors] = useState(true)

    const contextValues = {
        step,
        setStep: (newStep) => {
            setStep(newStep)
        },
        personalInformation,
        setPersonalInformation: (newInformation) => {
            setPersonalInformation(newInformation)
        },
        selectedPlan,
        setSelectedPlan: (newPlan) => {
            setSelectedPlan(newPlan)
        },
        isYearly,
        setIsYearly: () => {
            setIsYearly(!isYearly)
        },
        selectedAddons,
        setSelectedAddons: (newAddon) => {
            setSelectedAddons(newAddon)
        },
        anyFormErrors,
        setAnyFormErrors
    }

    return <FormStepContext.Provider value={contextValues}>
        {children}
    </FormStepContext.Provider>
}

export { Provider }
export default FormStepContext