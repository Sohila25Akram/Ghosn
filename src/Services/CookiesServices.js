import Cookies from "universal-cookie";
const cookies_token=new Cookies();
class Cookies_Services{
    get(name){
        return cookies_token.get(name);
    }
    set(name , value , option){
        return cookies_token.set(name , value , option);
    }
    remove(name){
        return cookies_token.remove(name);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Cookies_Services();