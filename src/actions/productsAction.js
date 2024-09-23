import axios from "axios";
import { getPlantNameSearchResult, getPotProduct, getProductById, getProductList, getProductsByOrderName, getProductsByOrderPrice, getProductsBySoilType, getProductsWithLimit } from "../queries/query";
import { useState } from "react";

const api = 'https://ghosn.runasp.net'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14'

export const fetchProductList = async () => {
    try {
      const response = await axios.post(`${api}/graphql`, { 
        query: getProductsWithLimit
    });
      console.log('result', response.data);
      const allPlants = response.data.data.paginatedPlants.nodes;
      return allPlants
    } catch (error) {
        if (error.response) {
            console.error('Request failed with status code:', error.response.status);
            console.error('Error response data:', error.response.data);
            console.error('Error response headers:', error.response.headers);
            if (error.response.data.errors) {
              console.error('GraphQL Errors:', error.response.data.errors);
              error.response.data.errors.forEach((graphqlError) => {
                console.error('GraphQL Error:', graphqlError.message);
              });
            }
        } else if (error.request) {
        console.error('Request was made but no response was received:', error.request);
        } else {
        console.error('Error setting up the request:', error.message);
        }
      throw new Error('Failed to fetch product list');
    }
};


export const fetchFilteredData = async (chosenFilter) => {
    let response;
    try{
        if(chosenFilter === 'all'){
            response = await axios.post(`${api}/graphql`, {
                query: getProductList
            })
        }else if(chosenFilter === 'name-desc'){
            response = await axios.post(`${api}/graphql`, {
                query: getProductsByOrderName,
                variables : {name: "DESC"}
            })
        }else if(chosenFilter === 'name-asc'){
            response = await axios.post(`${api}/graphql`, {
                query: getProductsByOrderName,
                variables : {name: "ASC"}
            })
        }else if(chosenFilter === 'price-desc'){
            response = await axios.post(`${api}/graphql`, {
                query: getProductsByOrderPrice,
                variables: {defaultPrice : "DESC"}
            })
        }else if(chosenFilter === 'price-asc'){
            response = await axios.post(`${api}/graphql`, {
                query: getProductsByOrderPrice,
                variables: {defaultPrice : "ASC"}
            })
        }else {
            response = await axios.post(`${api}/graphql`, {
                query: getProductsBySoilType,
                variables: { soilType: chosenFilter.toUpperCase() }
            });
        }
        const filteredItemsList = response.data.data.plants;
        return filteredItemsList;
    }catch(error) {
        console.error("Error fetching data:", error);
        console.error("GraphQL errors:", error.response.data.errors);
    }
};


export const fetchPotData = async () => {
    try {
        const response = await axios.post(`${api}/graphql`, {
            query: getPotProduct
        });
        const potList = response.data.data.potProducts;
        console.log(potList);
        return potList;
    } catch (error) {
        console.error('Failed to fetch Pots', error);
    }
}


export const handleGetPlantId = async (productId) => {
    console.log("Fetching product with ID:", productId); 
    try{
        const response = await axios.post(`${api}/graphql`,{
            query: getProductById,
            variables: {productId : parseInt(productId)}
        })
        console.log("Full GraphQL response:", response);
        if (response.data.errors) {
            console.error("GraphQL errors:", response.data.errors);
        } else {
            console.log("GraphQL data:", response.data.data);
            const dataReturned = response.data.data.plantById;
            return dataReturned[0];
        }
    }catch (error){
        console.error("Error fetching product:", error);
        throw error;
    }
}


export const fetchSearchedPlants = async (searchItem) => {
    if (!searchItem) return [];
    try {
        const response = await axios.post(`${api}/graphql`, {
            query: getPlantNameSearchResult,
            variables: { searchString: searchItem }
        });
        const plantsList = response.data.data.plants;
        return plantsList;
    } catch (error) {
        console.error('Error fetching plant data:', error);
    }
};
