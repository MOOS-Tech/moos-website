import axios from "axios";
let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const getBanner = async (payload) => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/banners/${payload}?populate=*`);
        return res.data.data.attributes;
    } catch (error) {
        return error;
    }
};

export const getNavbar = async () => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/navbars?populate=*`);
        return res.data.data;
    } catch (error) {
        return error;
    }
};

export const getNavbarActions = async () => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/navbar-right-sides`);
        return res.data.data;
    } catch (error) {
        return error;
    }
};
