import classNames from "classnames"
import { Link } from "react-router-dom"
import useFormStepContext from "../hooks/use-form-step-context"

function FooterNav() {
    const { step, personalInformation, selectedPlan, anyFormErrors } = useFormStepContext()

    let linkClassNames = classNames("px-[20px] py-[10px] font-medium rounded-md", {
        "bg-[#9699ab]": step === 1 && anyFormErrors
    })

    const whichStep = (backwardOrForward) => {
        switch (step) {
            case 1:
                return "/select-your-plan"
            case 2:
                if (backwardOrForward === "forward") {
                    return "/add-ons"
                } else {
                    return "/"
                }
            case 3:
                if (backwardOrForward === "forward") {
                    return "/finishing-up"
                } else {
                    return "/select-your-plan"
                }
            case 4:
                if (backwardOrForward === "forward") {
                    return "/confirmation"
                } else {
                    return "/add-ons"
                }
            default:
                break
        }
    }

    const handleConfirmationClick = (e) => {
        if (step === 4 && !selectedPlan.name) {
            e.preventDefault()
        }
        if (step === 1 && (personalInformation.name === "" || personalInformation.email === "" || personalInformation.tel === "")) {
            e.preventDefault()
        }
    }

    return <div className={`flex justify-between mb-[20px] p-[20px] ${step !== 5 && "bg-white"} xl:mb-0 xl:rounded-br-xl`}>
        <Link
            className={`${linkClassNames} ${step === 1 && "invisible"} ${step === 5 && "invisible"} bg-white text-[#9699ab] hover:text-black`}
            to={whichStep("backward")}>
            Go Back
        </Link>
        <Link
            className={`${linkClassNames}
            ${step === 4 && "bg-[#473dff] hover:bg-blue-500"}
            ${step === 5 && "invisible"}
            bg-[#02295a] text-white`}
            to={whichStep("forward")}
            onClick={e => handleConfirmationClick(e)}>
            {step === 4 ? "Confirm" : "Next Step"}
        </Link>
    </div>
}

export default FooterNav