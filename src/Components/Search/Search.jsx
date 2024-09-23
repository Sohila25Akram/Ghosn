import ProductsList from '../productlist/ProductsList'
import { useEffect, useState } from 'react';
import './search.css'
import { useQuery } from 'react-query';
import { getPlantNameSearchResult } from '../../queries/query';
import axios from 'axios';
import { ProductCard } from '../ProductCard/ProductCard';
import { PeopleSnapshot } from '../Post/Post';
import { fetchSearchedPlants } from '../../actions/productsAction';

const api = 'https://ghosn.runasp.net'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"

export function SearchPanel ({setShowSearchPanel}){

    const [searchItem, setSeachItem] = useState([]);

    const { data: dataPlants = [], isLoading: productsLoading, error: productsError } = useQuery(
        
        ["getSearchedPlants", searchItem],
        () => fetchSearchedPlants(searchItem),
    );

    useEffect(() => {
        if (searchItem) {
            fetchSearchedPlants(searchItem);
        }
    }, [searchItem])

    const handleSearchInput = (e) => {
        setSeachItem(e.target.value);
    };

    return(
        <div className='slider-panel-blur-container blur-fix'>
            <div className='slider-panel-container search-fix'>
                <div className='search-flex-filter-search'>
                    <div className="search-container">
                        <span className='search-icon'><i className="ri-search-line"></i></span>
                        <input type="search" placeholder='ما الذي تبحث عنه؟' name="" id="" value={searchItem} onChange={handleSearchInput} />
                    </div>
                </div>
                <div className='searched-items pro'>
                    {/* <ProductsList /> */}
                    {dataPlants && dataPlants.map((item, index) => (
                        <ProductCard product={item} key={index} />
                    ))}
                </div>
                <span className='close-btn' onClick={() => setShowSearchPanel(false)}><i className="ri-close-line"></i></span>
                
            </div>
        </div>
    )
}

