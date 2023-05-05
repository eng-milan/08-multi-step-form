import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import thankYouLogo from "../images/icon-thank-you.svg"

function Confirmation() {
    const { setStep } = useFormStepContext()

    useEffect(() => {
        setStep(5)
    }, [setStep])


    return <div className="relative -top-[85px] flex flex-col items-center mx-[15px] bg-white rounded-xl md:mx-[70px]
    lg:static lg:justify-center lg:m-0 lg:rounded-none lg:rounded-r-xl lg:w-[600px]">
        <img className="mt-[100px] w-[70px]" src={thankYouLogo} alt="thank you" />
        <h2 className="mt-[20px] text-[26px] font-bold lg:text-[40px]">Thank you!</h2>
        <p className="mt-[10px] mb-[100px] mx-[25px] text-[20px] text-center text-[#9699ab] leading-[25px] lg:mx-[50px] lg:text-[18px]">Thanks for confirming your subscription! We hope you have fun using our platform, If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
}

export default Confirmation