import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import DoctorLayout from "./layouts/DoctorLayout";




function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    
                   <Routes>
                    <Route path="/Doctor" element={<DoctorLayout/>}>
                    <Route index element={<Doctor/>}></Route>
                    
                    
                    
                    </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
