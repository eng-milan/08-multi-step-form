import classNames from "classnames"
import { useContext } from "react"
import FormStepContext from "../context/FormStep"
import { Link } from "react-router-dom"

function Header() {
    const { step, changeStep } = useContext(FormStepContext)

    const linkClassName = classNames("px-[15px] py-[8px] mx-[10px] border rounded-full font-bold")

    return <div
        className="flex justify-center items-start pt-[40px] text-white bg-mobile-bg bg-no-repeat bg-cover h-[200px]">
        <Link
            onClick={() => changeStep(1)}
            className={`${linkClassName} ${step === 1 && "text-black bg-[#d6d9e6]"}`}
            to="/">1</Link>
        <Link
            onClick={() => changeStep(2)}
            className={`${linkClassName} ${step === 2 && "text-black bg-[#d6d9e6]"}`}
            to="/select-your-plan">2</Link>
        <Link
            onClick={() => changeStep(3)}
            className={`${linkClassName} ${step === 3 && "text-black bg-[#d6d9e6]"}`}
            to="/add-ons">3</Link>
        <Link
            onClick={() => changeStep(4)}
            className={`${linkClassName} ${step === 4 && "text-black bg-[#d6d9e6]"}`}
            to="/finishing-up">4</Link>
    </div >
}

export default Header