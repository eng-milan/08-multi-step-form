import { useState } from "react"

function PersonalInfo() {
    const [personalInformation, setPersonalInformation] = useState({ name: "", email: "", tel: "" })


    const handleChange = (e) => {
        switch (e.target.id) {
            case "name":
                setPersonalInformation({ ...personalInformation, name: e.target.value })
                break
            case "email":
                setPersonalInformation({ ...personalInformation, email: e.target.value })
                break
            case "tel":
                setPersonalInformation({ ...personalInformation, tel: e.target.value })
                break
            default:
                break
        }
    }

    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] pt-[25px] pb-[40px] bg-white rounded-xl">
        <div>
            <h1 className="text-[30px] font-bold">Personal Info</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Please provide your name, email address, and phone number.</p>
            <form className="mt-[15px]">
                <label className="text-[14px] font-medium" htmlFor="name">Name</label>
                <input
                    onChange={e => handleChange(e)}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-bold"
                    id="name"
                    placeholder="e.g. Stephen King"
                    type="text"
                    required />
                <label className="mt-[15px] text-[14px] block font-medium" htmlFor="email">Email Address</label>
                <input
                    onChange={e => handleChange(e)}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-bold"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    required />
                <label className="mt-[15px] text-[14px] block font-medium" htmlFor="phone">Phone Number</label>
                <input
                    onChange={e => handleChange(e)}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-bold"
                    id="tel"
                    placeholder="e.g. +1 234 567 890"
                    type="tel"
                    required />
            </form>
        </div>
    </div>
}

export default PersonalInfo