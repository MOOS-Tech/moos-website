import axios from "axios";
let API_URL;

//TODO: refactor API_URL builder. it is returning 500 when use runtime call outside of a function.
function initEndpoint() {
    const config = useRuntimeConfig();
    API_URL = config.public.API_URL ? config.public.API_URL : 'http://localhost:1337';
}

export const getFooter = async () => {
    await initEndpoint();
    try {
        const res = await axios.get(API_URL + `/api/footers?populate=image,footer_term_and_conditions,footer_pages,footer_contacts.WEARE_MOOS`);
        return res.data.data[0].attributes;
    } catch (error) {
        return error;
    }
};
