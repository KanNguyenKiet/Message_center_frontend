import axios from "axios";
import { USER_SERVICE_URL } from "../config";

const getUserInfo = async () => {
    if (!localStorage.getItem("_session")) {
        console.log("Cannot get session key");
        return null;
    }

    try {
        var resp = await axios.get(USER_SERVICE_URL + "/userinfo", { 
            headers: {
                "_session": localStorage.getItem("_session")
            }
        });
        console.log(resp);
        return resp['data']['data'];
    } catch(err) {
        return null;
    }
}

export default getUserInfo;