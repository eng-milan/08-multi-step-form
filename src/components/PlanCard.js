import classNames from "classnames"

function PlanCard({ image, planName, monthlyRate, yearlyRate, isYearly, handlePlanClick, selectedPlan }) {
    const cardClassNames = classNames("flex items-start mb-[15px] px-[20px] py-[20px] border rounded-xl cursor-pointer hover:border-[#02295a] xl:flex-col xl:w-[170px]", {
        " bg-[#f0f6ff] border-[#02295a]": selectedPlan.name === planName
    })

return <div
    className={cardClassNames}
    onClick={(e) => handlePlanClick(e)}>
    <img className="mr-[20px] w-[55px] xl:mb-[40px]" src={image} alt="arcade" />
    <div className="flex flex-col">
        <span className="text-[20px] font-bold">{planName}</span>
        <span className="text-[#9699ab]">{isYearly ? `$${yearlyRate}/yr` : `$${monthlyRate}/mo`}</span>
        <span className="text-[14px]">{isYearly && "2 months free"}</span>
    </div>
</div>
}

export default PlanCard