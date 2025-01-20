import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Registration from "./pages/Registration";
import Code from "./components/Code";
import VerificationCode from "./pages/VerificationCode";
import RegistrationCompleted from "./pages/RegistrationCompleted";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import { ProfileProvider } from "./logic/ProfileContext";

function App() {
    const [emailPhone, setEmailPhone] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [rePassword, setRePassword] = useState(undefined)
    const [verificationCode, setVerificationCode] = useState(undefined)
  return (
    <ProfileProvider>
        <Router>
          <Routes>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Registration emailPhone={emailPhone} password={password} rePassword={rePassword} handleEmailPhone={(value) => setEmailPhone(value)} handlePassword={((value)=>setPassword(value))} handleRePassword={(value)=>setRePassword(value)}/>} path="/register"/>
            <Route element={<VerificationCode verificationCode={verificationCode}/>} path = "/verification"/>
            <Route element={<RegistrationCompleted/>} path="/finishRegister"/>
            <Route element={<ProtectedRoutes/>}>
            <Route element={<Home/>} path="/"/>
            </Route>
          </Routes>
        </Router>
    </ProfileProvider>
  );
}

export default App;
