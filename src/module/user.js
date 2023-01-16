import axios from "axios";
import { USER_SERVICE_URL } from "../config";

const getUserInfo = async () => {
    if (!sessionStorage.getItem("_session")) {
        return null;
    }

    try {
        var resp = await axios.get(USER_SERVICE_URL + "/userinfo", { 
            headers: {
                "_session": sessionStorage.getItem("_session")
            }
        });
        return resp['data']['data'];
    } catch(err) {
        return null;
    }
}

export default getUserInfo;