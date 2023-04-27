import { createContext, useState } from "react";

const FormStepContext = createContext()

function Provider({ children }) {
    const [step, setStep] = useState(1)

    const whichStep = {
        step,
        changeStep: (newStep) => {
            setStep(newStep)
        }
    }

    return <FormStepContext.Provider value={whichStep}>
        {children}
    </FormStepContext.Provider>
}

export { Provider }
export default FormStepContext