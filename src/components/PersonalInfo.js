
function PersonalInfo() {
    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl border">
        <div>
            <h1 className="text-[30px] font-bold">Personal Info</h1>
            <p className="mt-[10px] pr-[80px] text-[#9699ab]">Please provide your name, email address, and phone number.</p>
            <form className="mt-[20px]">
                <label className="text-[14px]" htmlFor="name">Name</label>
                <input
                    className="px-[15px] py-[10px] block border w-full rounded"
                    id="name"
                    placeholder="e.g. Stephen King"
                    type="text"
                    required />
                <label className="mt-[15px] text-[14px] block" htmlFor="email">Email Address</label>
                <input
                    className="px-[15px] py-[10px] block border w-full rounded"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    required />
                <label className="mt-[15px] text-[14px] block" htmlFor="phone">Phone Number</label>
                <input
                    className="px-[15px] py-[10px] block border w-full rounded"
                    id="phone"
                    placeholder="e.g. +1 234 567 890"
                    type="tel"
                    required />
            </form>
        </div>
    </div>
}

export default PersonalInfo