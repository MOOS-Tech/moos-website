import axios from "axios";

let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const getBusinessTitle = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/business-page-unmanage-retail-title-cards?populate=*`);
    } catch (error) {
        return error;
    }
};
export const BusinessGetStart = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/business-page-umnamage-retail-get-starteds`);
    } catch (error) {
        return error;
    }
};
export const getUnmannedRetailMoosValues = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/business-page-umnamage-retail-get-starteds`);
    } catch (error) {
        return error;
    }
};