import classNames from "classnames"
import { Link } from "react-router-dom"
import { useContext } from "react"
import FormStepContext from "../context/FormStep"

function FooterNav() {
    const { step, changeStep } = useContext(FormStepContext)

    const linkClassNames = classNames("px-[20px] py-[10px] text-white font-bold bg-[#02295a] rounded-md")

    return <div className="flex justify-between mb-[20px] p-[20px]">
        <Link
            className={`${linkClassNames} ${step === 1 && "invisible"}`}
            to="/">
            Go Back
        </Link>
        <Link
            className={`${linkClassNames} ${step === 4 && "bg-[#473dff]"}`}
            to="/">
            {step === 4 ? "Confirm" : "Next Step"}
        </Link>
    </div>
}

export default FooterNav