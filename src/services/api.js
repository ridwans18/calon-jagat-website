import axios from "axios";
export const fetchData = async (url) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_baseurl}${url}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const posdata = async (url, data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_baseurl}${url}`,
      data
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
