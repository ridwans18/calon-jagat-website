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

export const postdata = async (url, isidata) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_baseurl}${url}`,
      isidata
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletedata = async (url, id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_baseurl}${url}/${id}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedata = async (url, id, isidata) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_baseurl}${url}/${id}`,
      isidata
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
