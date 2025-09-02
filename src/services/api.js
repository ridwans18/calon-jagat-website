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
    const urlfinal = `${import.meta.env.VITE_API_baseurl}${url}`;
    const response = await axios.post(urlfinal, isidata);
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const postlogin = async (url, isidata) => {
  try {
    const urlfinal = `${import.meta.env.VITE_API_baseurl}${url}`;
    const response = await axios.post(urlfinal, isidata, {
      withCredentials: true,
    });
    const data = await response.data;

    return data;
  } catch (error) {
    return error.response;
  }
};
export const postlogout = async (url, isidata) => {
  try {
    const urlfinal = `${import.meta.env.VITE_API_baseurl}${url}`;
    const response = await axios.post(urlfinal, isidata, {
      withCredentials: true,
    });
    const data = await response.data;

    return data;
  } catch (error) {
    return error.response;
  }
};
export const postimg = async (url, isidata) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_baseurl}${url}`,
      isidata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Berhasil upload produk");
  } catch (err) {
    console.error("Gagal upload:", err);
  }
};

export const deletedata = async (url, id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_baseurl}${url}/${id}`
    );
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedata = async (url, id, isidata) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_baseurl}${url}/${id}`,
      isidata
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
