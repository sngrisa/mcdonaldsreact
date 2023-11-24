
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "../components/form/form";
import Index from "../components/index";
import Login from "../components/login/login";

let AppRoutingModule = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="form" element={<Form />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRoutingModule;