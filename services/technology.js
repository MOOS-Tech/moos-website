import axios from "axios";

let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const getTechnologyTitle = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/technology-pages/1?populate=*`);
    } catch (error) {
        return error;
    }
};
export const getTechProcess = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/technology-page-process-cards?populate=*`);
    } catch (error) {
        return error;
    }
};
