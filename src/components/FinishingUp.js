
function FinishingUp() {
    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl">
        <div>
            <h1 className="text-[30px] font-bold">Finishing up</h1>
            <p className="mt-[10px] pr-[80px] text-[#9699ab]">Double-check everything looks OK before confirming.</p>
            <div>
                <div className="flex">
                    <div className="flex flex-col">
                        <span>Arcade(Monthly)?</span>
                        <button>Change</button>
                    </div>
                    <span>$9/mo?</span>
                </div>
                <div className="flex">
                    <span>Online service?</span>
                    <span>+$1/mo?</span>
                </div>
                <div className="flex">
                    <span>Larger storage?</span>
                    <span>+$2/mo?</span>
                </div>
                <div className="flex">
                    <span>Total(per month)?</span>
                    <span>+$12/mo?</span>
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

export default FinishingUp