import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;


export const getBlocks = async () => {
    const responce = await axios.get(`${API_URL}/blocks`);
    return responce.data;
};

export const getBlockById = async (id) => {
    const responce = await axios.get(`${API_URL}/blocks/${id}`);
    return responce.data;
};
