import classNames from "classnames"
import { Link } from "react-router-dom"
import useFormStepContext from "../hooks/use-form-step-context"

function FooterNav() {
    const { step } = useFormStepContext()

    const linkClassNames = classNames("px-[20px] py-[10px] text-white font-bold bg-[#02295a] rounded-md")

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
                    return "/add-ons"
                }
            case 4:
                if (backwardOrForward === "forward") {
                    return "/confirmation"
                } else {
                    return "/finishing-up"
                }
            default:
                break
        }
    }

    return <div className="flex justify-between mb-[20px] p-[20px]">
        <Link
            className={`${linkClassNames} ${step === 1 && "invisible"}`}
            to={whichStep("backward")}>
            Go Back
        </Link>
        <Link
            className={`${linkClassNames} ${step === 4 && "bg-[#473dff]"}`}
            to={whichStep("forward")}>
            {step === 4 ? "Confirm" : "Next Step"}
        </Link>
    </div>
}

export default FooterNav