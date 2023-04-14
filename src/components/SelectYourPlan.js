import ArcadeImg from "../images/icon-arcade.svg"
import AdvancedImg from "../images/icon-advanced.svg"
import ProImg from "../images/icon-pro.svg"

function SelectYourPlan() {
    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl">
        <div>
            <h1 className="text-[30px] font-bold">Select your plan</h1>
            <p className="mt-[10px] pr-[80px] text-[#9699ab]">You have the option of monthly or yearly billing.</p>
            <div>
                <div className="flex">
                    <img src={ArcadeImg} alt="arcade" />
                    <div className="flex flex-col">
                        <span>Arcade</span>
                        <span>$9/mo-$90/yr</span>
                        <span>2 months free</span>
                    </div>
                </div>
                <div className="flex">
                    <img src={AdvancedImg} alt="advanced" />
                    <div className="flex flex-col">
                        <span>Advanced</span>
                        <span>$12/mo-$120/yr</span>
                        <span>2 months free</span>
                    </div>
                </div>
                <div className="flex">
                    <img src={ProImg} alt="pro" />
                    <div className="flex flex-col">
                        <span>Pro</span>
                        <span>$15/mo-$150/yr</span>
                        <span>2 months free</span>
                    </div>
                </div>
            </div>
            <form className="flex flex-col items-center mt-[20px]">
                <label className="text-[14px]" htmlFor="name">Monthly/Yearly</label>
                <input
                    className="px-[15px] py-[10px] block border w-full rounded"
                    id="name"
                    placeholder="e.g. Stephen King"
                    type="checkbox"
                    required />
            </form>
        </div>
    </div>
}

export default SelectYourPlan