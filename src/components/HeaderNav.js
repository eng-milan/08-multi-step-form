import classNames from "classnames"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link } from "react-router-dom"

function Header() {
    const { step, anyFormErrors } = useFormStepContext()

    const linkClassName = classNames("mx-[10px] px-[13px] py-[8px] border rounded-full font-bold lg:m-0 lg:mr-[20px] lg:px-[13px] lg:py-[6px]")

    const handleClick = (e) => {
        if (anyFormErrors || step === 5) {
            e.preventDefault()
        }
    }

    return <div
        className="flex justify-center items-start pt-[40px] text-white bg-mobile-bg bg-no-repeat bg-cover h-[200px]
        lg:ml-[20px] lg:mt-[20px] lg:mr-[80px] lg:pl-[20px] lg:mb-[20px] lg:bg-desktop-bg lg:h-[600px] lg:bg-cover lg:rounded-xl">
        <div className="flex lg:flex-col lg:mr-[100px]">
            <div className="lg:flex lg:items-center lg:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 1 && "text-black bg-[#d6d9e6]"}`}
                    to="/">1</Link>
                <div className="hidden lg:flex lg:flex-col">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 1</p>
                    <p className="font-bold">YOUR INFO</p>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 2 && "text-black bg-[#d6d9e6]"}`}
                    to="/select-your-plan">2</Link>
                <div className="hidden lg:flex lg:flex-col">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 2</p>
                    <p className="font-bold">SELECT PLAN</p>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 3 && "text-black bg-[#d6d9e6]"}`}
                    to="/add-ons">3</Link>
                <div className="hidden lg:flex lg:flex-col">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 3</p>
                    <p className="font-bold">ADD-ONS</p>
                </div>
            </div>
            <div className="lg:flex lg:items-center">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${(step === 4 || step === 5) && "text-black bg-[#d6d9e6]"}`}
                    to="/finishing-up">4</Link>
                <div className="hidden lg:flex lg:flex-col">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 4</p>
                    <p className="font-bold">SUMMARY</p>
                </div>
            </div>
        </div>
    </div >
}

export default Header