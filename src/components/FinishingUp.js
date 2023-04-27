import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import { Link } from "react-router-dom"

function FinishingUp() {
    const { changeStep } = useFormStepContext()

    useEffect(() => {
        changeStep(4)
    }, [changeStep])

    return <div className="relative -top-[80px] mx-[20px] mb-[50px] px-[30px] py-[30px] bg-white rounded-xl">
        <div>
            <h1 className="text-[32px] font-bold">Finishing up</h1>
            <p className="mt-[10px] text-[#9699ab] text-[20px] font-medium">Double-check everything looks OK before confirming.</p>
            <div className="mt-[20px] mb-[30px] px-[15px] py-[20px] bg-[#fafbff] rounded-xl">
                <div className="flex justify-between items-center mb-[20px] pb-[20px] border-b-2">
                    <div className="flex flex-col">
                        <span className="font-bold">Arcade (Monthly)</span>
                        <Link
                            className="text-[#9699ab] underline leading-none font-bold"
                            to="/select-your-plan">Change</Link>
                    </div>
                    <span className="font-bold">$9/mo</span>
                </div>
                <div className="flex justify-between items-center mb-[10px]">
                    <span className="text-[#9699ab] font-medium">Online service</span>
                    <span className="font-medium">+$1/mo</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[#9699ab] font-medium">Larger storage</span>
                    <span className="font-medium">+$2/mo</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-[#9699ab] font-medium">Total (per month)</span>
                <span className="text-[#473dff] text-[20px] font-bold">+$12/mo</span>
            </div>

        </div>
    </div>
}

export default FinishingUp