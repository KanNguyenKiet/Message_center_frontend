import axios from "axios";
import { USER_SERVICE_URL } from "../config";

const getUserInfo = async () => {
    console.log(sessionStorage.getItem("_session"));
    if (!sessionStorage.getItem("_session")) {
        return null;
    }

    try {
        console.log("call backend to get user info");
        var resp = await axios.get(USER_SERVICE_URL + "/userinfo", { 
            headers: {
                "_session": sessionStorage.getItem("_session")
            }
        });
        console.log(resp);
        return resp['data']['data'];
    } catch(err) {
        return null;
    }
}

export default getUserInfo;