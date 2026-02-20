import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import DoctorLayout from "./layouts/DoctorLayout";
import Doctor from "./layouts/DoctorLayout";
import Patient from "./pages/Patient";
import Reception from "./pages/Reception";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";


function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>

                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/" element={<DoctorLayout />}>
                            <Route index element={<Dashboard/>}></Route>
                            <Route path="/patient" element={<Patient/>}></Route>
                            <Route path="/reception" element={<Reception />}></Route>
                        </Route>

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
