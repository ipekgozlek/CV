import axios from 'axios';
const API_URL = 'http://localhost:3001/blocks';

export const getBlocks=async () => {
    const responce=await axios.get(API_URL);
    return responce.data;       
};

export const getBlockById = async (id) => {
    const responce= await axios.get(`${API_URL}/${id}`);
    return responce.data;
};
