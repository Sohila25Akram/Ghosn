import axios from "axios";
import { getPublichedArticles } from "../queries/query";

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export const fetchArticleList = async () => {
    try {
        const response = await axios.post(`${api}/graphql`, {
            query: getPublichedArticles
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const articles = response.data.data.publishedArticles;
        return articles;
    } catch (error) {
        console.error('Request failed:', error);
        throw new Error('Failed to fetch article list');
    }
};




