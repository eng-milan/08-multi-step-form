import classNames from "classnames"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link } from "react-router-dom"

function Header() {
    const { step, anyFormErrors } = useFormStepContext()

    const linkClassName = classNames("px-[15px] py-[8px] mx-[10px] border rounded-full font-bold")

    const handleClick = (e) => {
        if (anyFormErrors) {
            e.preventDefault()
        }
    }

    return <div
        className="flex justify-center items-start pt-[40px] text-white bg-mobile-bg bg-no-repeat bg-cover h-[200px]">
        <div className={`${step === 5 && "invisible"}`}>
            <Link
                onClick={e => handleClick(e)}
                className={`${linkClassName} ${step === 1 && "text-black bg-[#d6d9e6]"}`}
                to="/">1</Link>
            <Link
                onClick={e => handleClick(e)}
                className={`${linkClassName} ${step === 2 && "text-black bg-[#d6d9e6]"}`}
                to="/select-your-plan">2</Link>
            <Link
                onClick={e => handleClick(e)}
                className={`${linkClassName} ${step === 3 && "text-black bg-[#d6d9e6]"}`}
                to="/add-ons">3</Link>
            <Link
                onClick={e => handleClick(e)}
                className={`${linkClassName} ${step === 4 && "text-black bg-[#d6d9e6]"}`}
                to="/finishing-up">4</Link>
        </div>
    </div >
}

export default Header