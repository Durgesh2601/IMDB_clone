import { Navbar } from "../Navbar/Navbar";
import "./SignUp.css";
export const SignUp = () => {
    return <>
    <Navbar/>
    <div className="contSignUp mt-4">
        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
    </div>
    </>
}