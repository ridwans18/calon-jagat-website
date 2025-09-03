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
    return error;
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

export const getexcell = async (endpoint, FormData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_baseurl}${endpoint}/`,
      FormData,
      {
        responseType: "blob", // penting supaya file tidak rusak
        // withCredentials: true,
      }
    );
    console.log(response);

    // bikin link download manual
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "report.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Gagal download Excel:", error);
  }
};
