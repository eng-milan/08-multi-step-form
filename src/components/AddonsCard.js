
function AddonsCard({ id, name, description, monthlyFee, yearlyFee }) {
    return <div
        className="flex items-center justify-between mb-[15px] px-[15px] py-[20px] bg-[#f0f6ff] border border-[#d6d9e6]
        rounded-xl cursor-pointer">
        <label className="hidden" htmlFor={id}></label>
        <div className="flex items-center">
            <input
                className="relative mr-[15px] w-[25px] h-[25px] appearance-none border rounded-md checked:bg-[#473dff]
                checked:before:content-['\2713'] checked:before:absolute checked:before:text-white checked:before:text-[16px]
                checked:before:left-[0px] checked:before:right-[0px]"
                id={id}
                type="checkbox" />
            <div className="flex flex-col mr-[20px]">
                <span className="text-[17px] font-bold">{name}</span>
                <span className="text-[14px] text-[#9699ab] font-medium">{description}</span>
            </div>
        </div>
        <span className="text-[#473dff] font-bold">{monthlyFee}</span>
    </div>
}

export default AddonsCard