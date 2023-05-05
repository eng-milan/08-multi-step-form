import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import SelectYourPlan from "./components/SelectYourPlan"
import AddOns from "./components/AddOns"
import FinishingUp from "./components/FinishingUp";
import Confirmation from "./components/Confirmation"
import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"
import Footer from "./components/Footer"
import useFormStepContext from "./hooks/use-form-step-context";

function App() {
  const { step } = useFormStepContext()

  return <main className={`h-screen ${step === 5 && "bg-gray-100"} bg-white lg:flex lg:bg-[#f0f6ff]`}>
    <div className="lg:flex lg:bg-white lg:rounded-l-xl lg:m-auto">
      <HeaderNav />
      <div className={`bg-[#f0f6ff] ${step === 5 && "lg:h-full"}`}>
        <div className="h-[650px] lg:h-[550px] lg:bg-white">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/select-your-plan" element={<SelectYourPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/finishing-up" element={<FinishingUp />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
        <FooterNav />
      </div>
    </div>
    <div className="fixed bottom-0 flex justify-center bg-white w-full">
      <Footer />
    </div>
  </main>
}

export default App;