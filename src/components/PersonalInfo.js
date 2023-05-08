import { useEffect, useState } from "react"
import useFormStepContext from "../hooks/use-form-step-context"

function PersonalInfo() {
    const { setStep, personalInformation, setPersonalInformation, setAnyFormErrors } = useFormStepContext()
    const [formErrors, setFormErrors] = useState({ name: "", email: "", tel: "" })

    useEffect(() => {
        setStep(1)
    }, [setStep])

    const validate = (values) => {
        let errors = {}

        if (values.name === "") {
            errors.name = "Name is required!"
        }

        if (values.email === "") {
            errors.email = "Email is required!"
        } else if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Email is invalid!"
        }

        if (values.tel === "") {
            errors.tel = "Phone number is required!"
        } else if (values.tel && !/^[0-9]{10}$/.test(values.tel)) {
            errors.tel = "Phone number is invalid!"
        }

        return errors
    }

    const handleChange = (e) => {
        const { id, value } = e.target
        setPersonalInformation(prevValue => ({ ...prevValue, [id]: value }))
        const errors = validate({ ...personalInformation, [id]: value })
        console.log(errors)
        setFormErrors(prevErrors => ({ ...prevErrors, [id]: errors[id] }))
        if (Object.values(errors).every(value => value === undefined)) {
            setAnyFormErrors(false)
        } else {
            setAnyFormErrors(true)
        }
    }

    return <div className="relative -top-[85px] mx-[20px] px-[30px] pt-[25px] pb-[50px] bg-white rounded-xl md:mx-[70px]
    lg:static lg:m-0 lg:pt-[50px] lg:rounded-none lg:rounded-tr-xl lg:w-[600px]">
        <div>
            <h1 className="text-[30px] font-bold lg:text-[40px]">Personal Info</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium lg:text-[18px]">Please provide your name, email address, and phone number.</p>
            <form className="mt-[15px] lg:mt-[30px]">
                <label className="text-[14px] font-medium" htmlFor="name">Name</label>
                <input
                    onChange={e => handleChange(e)}
                    value={personalInformation.name}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-medium cursor-pointer"
                    id="name"
                    placeholder="e.g. Stephen King"
                    type="text"
                    required />
                {formErrors.name && <span className="text-red-500">{formErrors.name}</span>}
                <label className="mt-[15px] text-[14px] block font-medium" htmlFor="email">Email Address</label>
                <input
                    onChange={e => handleChange(e)}
                    value={personalInformation.email}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-medium cursor-pointer"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    required />
                {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
                <label className="mt-[15px] text-[14px] block font-medium" htmlFor="tel">Phone Number</label>
                <input
                    onChange={e => handleChange(e)}
                    value={personalInformation.tel}
                    className="px-[15px] py-[10px] block border w-full rounded text-[18px] font-medium cursor-pointer"
                    id="tel"
                    placeholder="e.g. +1 234 567 890"
                    type="tel"
                    required />
                {formErrors.tel && <span className="text-red-500">{formErrors.tel}</span>}
            </form>
        </div>
    </div>
}

export default PersonalInfo