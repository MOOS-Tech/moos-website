import axios from "axios";
export const smallWhiteCardGetAll = async (payload) => {
    try {
      return await axios.get(`http://localhost:1337/api/learn-more-cards?populate=*`);
    } catch (error) {
      return error;
    }
  };