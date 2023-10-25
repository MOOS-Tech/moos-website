import axios from "axios";
export const smallWhiteCardGetAll = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/learn-more-cards?populate=*`);
    } catch (error) {
      return error;
    }
  };

  export const getTitle = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/titles/HomePage`);
    } catch (error) {
      return error;
    }
  };

  export const getQuotes = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/quotes`);
    } catch (error) {
      return error;
    }
  };

  export const getCardViews = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/card-views?populate=*`);
    } catch (error) {
      return error;
    }
  };

  export const getImages = async (params) => {
    try {
      return await axios.get(`http://localhost:1337/api/images/${params}?populate=*`);
    } catch (error) {
      return error;
    }
  };
  export const getPatners = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/partners?populate=*`);
    } catch (error) {
      return error;
    }
  };
 
  export const bookMeeting = async (payload) => {
    try {
      return await axios.post(`http://localhost:1337/api/book-meetings`, payload);
    } catch (error) {
      return error;
    }
  };