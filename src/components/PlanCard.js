
function PlanCard({ image, planName, monthlyRate, yearlyRate, isYearly }) {
    return <div className="flex items-start mb-[15px] px-[20px] py-[20px] border border-[#d6d9e6] rounded-xl">
        <img className="mr-[20px] w-[55px]" src={image} alt="arcade" />
        <div className="flex flex-col">
            <span className="text-[20px] font-bold">{planName}</span>
            <span className="text-[#9699ab]">{isYearly ? yearlyRate : monthlyRate}</span>
            <span className="text-[14px]">{isYearly && "2 months free"}</span>
        </div>
    </div>
}

export default PlanCard