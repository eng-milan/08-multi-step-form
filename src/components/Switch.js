
function Switch({ isYearly, onToggle }) {
    return <label className="relative inline-block w-[40px] h-[20px]">
        <input
            className="opacity-0 w-0 h-0 peer"
            type="checkbox"
            checked={isYearly}
            onChange={onToggle} />
        <span
            className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer
        before:absolute before:h-[12px] before:w-[12px] before:bg-white before:left-[4px] before:bottom-[4px]
        before:duration-[400ms] before:rounded-[50%] peer-checked:before:translate-x-[20px] bg-[#02295a] rounded-[20px]" />
    </label>
}

export default Switch
