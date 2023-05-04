import classNames from "classnames"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link } from "react-router-dom"

function Header() {
    const { step, anyFormErrors } = useFormStepContext()

    const linkClassName = classNames("px-[15px] py-[8px] mx-[10px] border rounded-full font-bold")

    const handleClick = (e) => {
        if (anyFormErrors || step === 5) {
            e.preventDefault()
        }
    }

    return <div
        className="flex justify-center items-start pt-[40px] text-white bg-mobile-bg bg-no-repeat bg-cover h-[200px]
        xl:m-[20px] xl:pl-[20px] xl:bg-desktop-bg xl:h-[600px] xl:bg-contain">
        <div className="xl:mr-[100px]">
            <div className="xl:flex xl:items-center xl:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 1 && "text-black bg-[#d6d9e6]"}`}
                    to="/">1</Link>
                <div className="invisible xl:visible">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 1</p>
                    <p className="font-bold">YOUR INFO</p>
                </div>
            </div>
            <div className="xl:flex xl:items-center xl:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 2 && "text-black bg-[#d6d9e6]"}`}
                    to="/select-your-plan">2</Link>
                <div className="invisible xl:visible">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 2</p>
                    <p className="font-bold">SELECT PLAN</p>
                </div>
            </div>
            <div className="xl:flex xl:items-center xl:mb-[30px]">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${step === 3 && "text-black bg-[#d6d9e6]"}`}
                    to="/add-ons">3</Link>
                <div className="invisible xl:visible">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 3</p>
                    <p className="font-bold">ADD-ONS</p>
                </div>
            </div>
            <div className="xl:flex xl:items-center">
                <Link
                    onClick={e => handleClick(e)}
                    className={`${linkClassName} ${(step === 4 || step === 5) && "text-black bg-[#d6d9e6]"}`}
                    to="/finishing-up">4</Link>
                <div className="invisible xl:visible">
                    <p className="text-[#9699ab] text-[14px] font-medium">STEP 4</p>
                    <p className="font-bold">SUMMARY</p>
                </div>
            </div>
        </div>
    </div >
}

export default Header