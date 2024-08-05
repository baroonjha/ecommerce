import { publicRequest } from "../../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login =async(dispatch,user)=>{
    dispatch(loginStart());

    try {
        console.log("hitting api")
        const resp = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(resp.data));
    } catch (err) {
        dispatch(loginFailure())
    }
}