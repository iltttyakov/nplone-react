import axios from './axiosApi';
import {SUBSCRIPTION_NEW_API_URL} from "../urls";

class SubscriptionApi {

    static new(email, name, lang) {
        return axios.post(SUBSCRIPTION_NEW_API_URL, {email, name, lang})
    }

}

export default SubscriptionApi