import { Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import SelectYourPlan from "./components/SelectYourPlan"
import AddOns from "./components/AddOns"
import FinishingUp from "./components/FinishingUp";
import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"
import Footer from "./components/Footer"

function App() {
  return <main>
    <div>
      <HeaderNav />
      <div className="bg-[#f0f6ff] border">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/select-your-plan" element={<SelectYourPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/finishing-up" element={<FinishingUp />} />
        </Routes>
      </div>
      <FooterNav />
    </div>
    <div className="fixed bottom-0 flex justify-center bg-white w-full">
      <Footer />
    </div>
  </main>
}

export default App;