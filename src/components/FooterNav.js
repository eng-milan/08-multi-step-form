import classNames from "classnames"
import { Link } from "react-router-dom"
import useFormStepContext from "../hooks/use-form-step-context"

function FooterNav() {
    const { step, anyFormErrors } = useFormStepContext()

    let linkClassNames = classNames("px-[20px] py-[13px] w-[130px] text-center font-medium rounded-md", {
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
        if (step === 1 && anyFormErrors) {
            e.preventDefault()
        }
    }

    return <div className={`flex justify-between mb-[20px] p-[20px] bg-white ${step === 5 && "hidden"}
    md:px-[70px] lg:mb-0 lg:px-[30px] lg:rounded-br-xl`}>
        <Link
            className={`${linkClassNames} ${step === 1 && "invisible"} pl-0 text-left bg-white text-[#9699ab] hover:text-black lg:pl-0`}
            to={whichStep("backward")}>
            Go Back
        </Link>
        <Link
            className={`${linkClassNames} ${step === 4 && "bg-[#473dff] hover:bg-blue-500"} bg-[#02295a] text-white`}
            to={whichStep("forward")}
            onClick={e => handleConfirmationClick(e)}>
            {step === 4 ? "Confirm" : "Next Step"}
        </Link>
    </div>
}

export default FooterNav