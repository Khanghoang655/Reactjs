import axios from "axios"

const params = {
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRAPI_APP_KEY
    }
}

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(import.meta.env.VITE_STRAPI_URL + url, params);
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
}

export const insertDataFromApi = async (url, input) => {
    console.log(import.meta.env.VITE_STRAPI_URL + url)
    try {
        const { data } = await axios.post(import.meta.env.VITE_STRAPI_URL + url, input, params);
        return data;
    } catch (e) {
        console.error(e);
        return e;
    }
}
export const insertUserFromApi = async (url, input, params) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_STRAPI_URL + url,
        input,
        { params } 
      );
      return data;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  
