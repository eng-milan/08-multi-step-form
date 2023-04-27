import { useContext } from "react";
import FormStepContext from "../context/FormStep";

function useFormStepContext() {
    return useContext(FormStepContext)
}

export default useFormStepContext