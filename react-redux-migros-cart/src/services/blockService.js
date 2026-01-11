import axios from 'axios';
const API_URL = 'http://localhost:3001/blocks';

export const getBlocks=async () => {
    const responce=await axios.get(API_URL);
    return responce.data;       
};