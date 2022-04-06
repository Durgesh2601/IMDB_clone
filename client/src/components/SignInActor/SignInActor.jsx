import { Navbar } from "../Navbar/Navbar";
import "./SignInActor.css";
export const SignInActor = () => {
    return <>
    <Navbar/>
    <div className="contSignIn mt-3">
    <div className="formDiv mt-3">
        <h1 className="display-4 text-center mb-3" style={{color:"white"}}>Login as an actor</h1>
        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <select class="form-select" aria-label="Default select example">
        <option selected>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
        <div class="input-group mb-3 mt-3">
        <span class="input-group-text" id="inputGroup-sizing-default">DOB</span>
        <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text sm" id="inputGroup-sizing-default">Bio</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Movies</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="btnDiv">
        <button type="button" className="btn btn-info m-auto">Sign In</button>
        </div>
    </div>
    </div>
    </>
}