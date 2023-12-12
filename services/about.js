import axios from "axios";

let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const getAboutTitle = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/our-company-page-title-cards?populate=*`);
    } catch (error) {
        return error;
    }
};
export const joinWithUs = async (payload) => {
    await initEndpoint();
    try {
        return await axios.post(API_URL + `/api/job-applications`, payload);
    } catch (error) {
        return error;
    }
};
export const uploadFile = async (payload) => {
    await initEndpoint();
    try {
        return await axios.post(API_URL + `/api/upload`, payload);
    } catch (error) {
        return error;
    }
};
export const getCareerPositions = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/our-company-page-job-vacancies?populate=*`);
    } catch (error) {
        return error;
    }
};
export const getOurteam = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/our-company-page-meet-our-teams?populate=*`);
    } catch (error) {
        return error;
    }
};
export const getCareerPaeImage = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/our-company-page-vacancy-images/1?populate=*`);
    } catch (error) {
        return error;
    }
};