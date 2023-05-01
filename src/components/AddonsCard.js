import { useState } from "react"

function AddonsCard({ id, name, description, monthlyFee, yearlyFee, isYearly, handleAddonClick }) {
    const [isChecked, setIsChecked] = useState(false)

    return <div
        className={`flex items-center justify-between mb-[15px] px-[15px] py-[20px] border rounded-xl cursor-pointer
        ${isChecked && "bg-[#f0f6ff] border-[#02295a]"}`}
        onClick={(e) => {
            handleAddonClick(e)
            setIsChecked(!isChecked)
        }}>
        <label className="hidden" htmlFor={id}></label>
        <div className="flex items-center">
            <input
                className="relative mr-[15px] w-[25px] h-[25px] appearance-none border rounded-md checked:bg-[#473dff]
                checked:before:content-['\2713'] checked:before:leading-[20px] checked:before:text-[30px] checked:before:text-white"
                id={id}
                type="checkbox"
                readOnly
                checked={isChecked} />
            <div className="flex flex-col mr-[20px]">
                <span className="text-[17px] font-bold">{name}</span>
                <span className="text-[14px] text-[#9699ab] font-medium">{description}</span>
            </div>
        </div>
        <span className="text-[#473dff] font-medium">{isYearly ? `$${yearlyFee}/yr` : `$${monthlyFee}/mo`}</span>
    </div>
}

export default AddonsCard