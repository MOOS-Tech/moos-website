import axios from "axios";

let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const smallWhiteCardGetAll = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/learn-more-cards?populate=*`);
    } catch (error) {
        return error;
    }
};

export const getTitle = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/titles/HomePage`);
    } catch (error) {
        return error;
    }
};

export const getQuotes = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/quotes`);
    } catch (error) {
        return error;
    }
};

export const getCardViews = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/card-views?populate=*`);
    } catch (error) {
        return error;
    }
};

export const getImages = async (params) => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/images/${params}?populate=*`);
    } catch (error) {
        return error;
    }
};
export const getPatners = async () => {
    await initEndpoint();
    try {
        return await axios.get(API_URL + `/api/partners?populate=*`);
    } catch (error) {
        return error;
    }
};

export const getContactTypes = async () => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/bookmeeting-options`);
        return res.data.data
    } catch (error) {
        return error;
    }
};

export const submitForum = async (payload) => {
    await initEndpoint();
    try {
        const res = await axios.post(API_URL + `/api/book-meetings`,payload);
        return res;
    } catch (error) {
        return error;
    }
};
export const getSubTopics= async (id) => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/section-subtopics/${id}`);
        return res;
    } catch (error) {
        return error;
    }
};

