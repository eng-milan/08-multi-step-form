
function AddOns() {
    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl">
        <h1 className="text-[30px] font-bold">Pick add-ons</h1>
        <p className="mt-[10px] pr-[80px] text-[#9699ab]">Add-ons help enhance your gaming experience.</p>
        <div>
            <div className="flex">
                <label className="hidden" htmlFor="online-serice"></label>
                <input
                    id="online-serice"
                    type="checkbox"
                    required />
                <div className="flex flex-col">
                    <span>Online Service</span>
                    <span>Access to multiplayer games</span>
                </div>
                <span>+1$/mo-+$10/yr</span>
            </div>
            <div className="flex">
                <label className="hidden" htmlFor="larger-storage"></label>
                <input
                    id="larger-storage"
                    type="checkbox"
                    required />
                <div className="flex flex-col">
                    <span>Larger Storage</span>
                    <span>Extra 1TB of cloud save</span>
                </div>
                <span>+2$/mo-+$20/yr</span>
            </div>
            <div className="flex">
                <label className="hidden" htmlFor="customizable-profile"></label>
                <input
                    id="customizable-profile"
                    type="checkbox"
                    required />
                <div className="flex flex-col">
                    <span>Customizable Profile</span>
                    <span>Custom theme on your profile</span>
                </div>
                <span>+2$/mo-+$20/yr</span>
            </div>
        </div>
    </div>
}

export default AddOns