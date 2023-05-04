import { useEffect } from "react"
import useFormStepContext from "../hooks/use-form-step-context"
import thankYouLogo from "../images/icon-thank-you.svg"

function Confirmation() {
    const { setStep } = useFormStepContext()

    useEffect(() => {
        setStep(5)
    }, [setStep])


    return <div className="relative -top-[85px] flex flex-col items-center mx-[15px] bg-white rounded-xl
    xl:static xl:justify-center xl:m-0 xl:rounded-none xl:rounded-tr-xl xl:h-[555px] xl:w-[600px] border-4">
        <img className="mt-[100px] w-[70px]" src={thankYouLogo} alt="thank you" />
        <h2 className="mt-[20px] text-[26px] font-bold xl:text-[40px]">Thank you!</h2>
        <p className="mt-[10px] mb-[100px] mx-[25px] text-[20px] text-center text-[#9699ab] leading-[25px] xl:mx-[50px] xl:text-[18px]">Thanks for confirming your subscription! We hope you have fun using our platform, If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
}

export default Confirmation