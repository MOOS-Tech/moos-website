import axios from "axios";
export const getAllServices = async () => {
    try {
      return await axios.get(`http://localhost:1337/api/services?populate=*`);
    } catch (error) {
      return error;
    }
  };