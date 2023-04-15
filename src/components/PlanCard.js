
function PlanCard({ image, planName, billingOption, yearly }) {
    return <div className="flex">
        <img src={image} alt="arcade" />
        <div className="flex flex-col">
            <span>{planName}</span>
            <span>{billingOption}</span>
            <span>{yearly && "2 months free"}</span>
        </div>
    </div>
}

export default PlanCard