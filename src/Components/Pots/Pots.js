import { PotCard } from '../PotCard/PotCard'
import './pots.css'
import productsimg from "../../assets/images/products.png"
import axios from 'axios'
import { getPotProduct } from '../../queries/query'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchPotData } from '../../actions/productsAction'

const api = 'https://ghosn.runasp.net'

function Pots(){
    // const [potData, setPotData] = useState([])
    // const [potImage, setPotImage] = useState({})
    // const data = ["hello everyone\n\n what what"]

    // const fetchPotData = async() => {
    //     try{
    //         const response = await axios.post(`${api}/graphql`, {
    //             query: getPotProduct
    //         })
    //         const potList = response.data.data.potProducts;
    //         console.log(potList)
    //         setPotData(potList);
    //         // fetchPotVariationImages(potList);
    //     }catch (error){
    //         console.error('failed to fetch Pots', error)
    //     }
    // }

    const { data: potData = [], isLoading: productsLoading, error: productsError } = useQuery("getProducts", fetchPotData);

    // const fetchPotVariationImages = async (potList) => {
    //     const images = {}
    //     try {
    //         await Promise.all(potList.map(async (pot) => {
    //             const potImageResponse = pot.imageUrl ? await axios.get(`${api}/api/pots/PotImage/${pot.imageUrl}`) : null;
    //             const potImage = potImageResponse ? potImageResponse.data : null;
                
    //             const variationImages = await Promise.all(pot.potVariations.map(async (variation) => {
    //                 const response = await axios.get(`${api}/api/pots/PotVariationImage/${variation.imageUrl}`);
    //                 return response.data;
    //             }));
                
    //             images[pot.id] = {
    //                 potImage,
    //                 variationImages
    //             };
    //         }));
    //         setPotImage(images);
    //         console.log('Fetched images:', images);  // Debugging line
    //     } catch (error) {
    //         console.error('Failed to fetch the images', error)
    //     }
    // }

    useEffect(() => {
        fetchPotData();
        // if(potData){
        //     fetchPotVariationImage();
        // }
    }, [])

    const potsWithVariations = potData.filter(pot => pot.potVariations.length > 0);

    return(
        <div className='pots-cantainer'>
             {potsWithVariations.map(pot => (
                <PotCard pot={pot} key={pot.id} />
            ))}
        </div>
    )
}


export default Pots