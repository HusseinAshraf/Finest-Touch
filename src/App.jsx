import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import TermsAndConditions from "./Component/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import FAQ from "./Component/FAQ/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
        <Route path="/privacy-policy"element={<PrivacyPolicy />} /> 
        <Route path="/faq" element={<FAQ />} /> 
      </Routes>
    </Router>
  );
}

export default App;
