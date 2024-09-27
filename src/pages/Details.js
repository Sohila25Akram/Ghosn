import { SliderPanel, SliderPotComponent} from '../Components/SliderComponent/SliderComponent';
import { SliderMultiplePhotos } from '../Components/SliderComponent/SliderComponent';
import { Quantity } from '../Components/ProductSmallDetails/ProductSmallDetails';
import { Rating } from '../Components/ProductSmallDetails/ProductSmallDetails';
import '../styles/Details.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../queries/query';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { addProductToCart } from '../features/products/productsSlice';
import { addToCart } from '../features/products/cartSlice';
import { setError, setProducts, setLoading } from '../features/products/productsSlice'
import { handleGetPlantId } from '../actions/productsAction';

// const api = 'https://9838mzjl-7268.uks1.devtunnels.ms/graphql';
// const api = 'https://4gf4bwsm-7268.uks1.devtunnels.ms'
// const api = 'https://q534k15r-7268.uks1.devtunnels.ms'
const api2 = 'https://ghosn.runasp.net/graphql'
const api = 'https://ghosn.runasp.net'

export function Details (){
    // const [addProductToCart, setAddProductToCart] = useState([])
    // const [productById, setProductById] = useState(null)
    const [quantity, setQuantity] = useState(1);
    const {productId} = useParams();
    const cartItems = useSelector(state => state.cart.cartItems);

    // const calculateTotalPrice = () => {
    //     let total = 0;
    //     cartItems.forEach(item => {
    //         total += item.defaultPrice * item.quantity;
    //     });
    //     return total;
    // };

    // const products = useSelector(state => state.products.products);
    // const product = products && products.find(product => product.id === parseInt(productId));

    // const [product, setProduct] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(api, {
    //                 query: getProductByIdQuery,
                        
    //                 variables: {
    //                     productId: parseInt(productId)
    //                 }
    //     });

    //     if (response.data.errors) {
    //         throw new Error(response.data.errors[0].message);
    //     }
    //     setProduct(response.data.plantById);
    //     console.log(response.data)
    //     // console.log(response.data.data)
    //     setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [productId]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    const dispatch = useDispatch();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTFlYjM5Ny0zZjQxLTQ4YzAtYWY4Zi1kZTJjNmU5MzJhZjEiLCJzdWIiOiJMZ0VZdkh6ZVd5Y1Y2NCIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsIm5hbWUiOiJqbGpsIGlvIiwidWlkIjoiOCIsInJvbGUiOiJXcml0ZXIiLCJuYmYiOjE3MTU2MDc1NDYsImV4cCI6MTcxNTYwNzcyNiwiaWF0IjoxNzE1NjA3NTQ2LCJpc3MiOiJNYWluU3RyZWFtQmFja2VuZC5WMCIsImF1ZCI6IkZyb250RW5kSW5EZXZlbG9wbWVudCJ9.tJRwlX7OzPOhwSSEajIoB9ilKiSqy3dc-keip8Hie14"
    // const { mutate } = useMutation(
    //     ({ productId, quantity }) =>
    //         axios.post(
    //             `${api}/Auth/AddToCart`,
    //             { productId, quantity },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             }
    //         ),
    //     {
    //         onSuccess: (data) => {
    //             dispatch(addProductToCart(data)); // Dispatch action to add product to cart
    //             console.log("Updated cart data:");
    //         },
    //         onError: (error) => {
    //             console.error('Error adding product to cart:', error);
    //             // Handle error here
    //         }
    //     }
    // );
    //----------------------------------------------------------
    // const handleGetPlantId = async () => {
    //     console.log("Fetching product with ID:", productId); 
    //     try{
    //         const response = await axios.post(api2,{
    //             query: getProductById,
    //             variables: {productId : parseInt(productId)}
    //         })
    //         // if (response.data.data && response.data.data.plantById) {
    //         //     dispatch(setProducts(response.data.data.plantById[0])); // Return the first element if found
    //         // }
    //         console.log("Full GraphQL response:", response); // Full response debug log
    //         if (response.data.errors) {
    //             console.error("GraphQL errors:", response.data.errors);
    //         } else {
    //             console.log("GraphQL data:", response.data.data);
    //             const dataReturned = response.data.data.plantById;
    //             if (dataReturned && dataReturned.length > 0) {
    //                 setProductById(dataReturned[0]); // Access the first element in the array
    //             } else {
    //                 console.error("No product found:", response.data);
    //             }
    //         }
    //     }catch (error){
    //         console.error("Error fetching product:", error);
    //         throw error; // Re-throw the error to propagate it further
    //     }
    // }
    //-----------------------------------------------

    // useEffect(()=>{
    //     const fetchProduct = async () => {
    //         const productData = await handleGetPlantId();
    //         if (productData) {
    //             // Dispatch an action to set the product in the Redux store
    //             dispatch(setProducts(productData));
    //         } else {
    //             // Handle case where product is not found
    //             console.error("Product not found with ID:", productId);
    //         }
    //     };
    //     fetchProduct();
    // }, [productId])

    const { data: productById = [], isLoading: productsLoading, error: productsError } = useQuery( ["getProductId", productId], // use an array as the query key to include productId
        () => handleGetPlantId(productId), // pass the function reference
        {
            enabled: !!productId, // Ensures the query runs only if productId is truthy
        });
    useEffect(() => {
        handleGetPlantId(productId);
    }, [productId])

    const handleAddToCart = async (product) => {
        const cartItem = {
            id: product.id,
            name: product.name,
            defaultPrice: product.defaultPrice,
            minTemperature: product.minTemperature,
            maxTemperature: product.maxTemperature,
            humdity: product.humdity,
            amountSunlight: product.amountSunlight,
            height: product.height,
            description: product.description,
            quantity: quantity
        };
        dispatch(addToCart(cartItem));;

        // dispatch(addToCart(product))
        try {
            const response = await axios.post(`${api}/api/Auth/AddToCart`,
                {
                    productId: product.id,
                    quantity: quantity, // Update to include quantity
                    potVariationId: null // Set the potVariationId to 0 or any default value as needed
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("Full response from backend:", response.data);
            // Check for success message
            // if (response.data === "Added To Cart Successfully") {
                // Product added to cart successfully
                dispatch(addToCart(cartItem));
                console.log("Product successfully added to cart.");
            // } else if (response.data === "Cart item quantity updated successfully") {
                // Quantity of existing item updated successfully
                // console.log("Cart item quantity updated successfully.");
            // } else {
                // Unexpected response
                // console.error("Failed to add product to cart: Unexpected response");
            // }
        }catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }
        // ).then(response => {
        //     console.log("Product added to cart:", response.data);
            // Perform any further actions after successfully adding the product to cart
            // let total = calculateTotalPrice(cartItems);
            // console.log('total with quantity', total);        console.log("Full response from backend:", response.data);


    

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    // useEffect(() => {
    //     let total = calculateTotalPrice();
        
    // }, cartItems);


    return(
        <>
        {productById && (
            <div className="container">
                <div className='details-content'>
                    <div className='right-content'>
                        <div className='label'>
                            <h3>{productById.name}</h3>
                            <span className='price'>{parseFloat(productById.defaultPrice).toFixed(2)}E.P</span>
                        </div>
                        <div className='new-cont-details'>
                            <p>{productById.description}</p>
                            {/* <SliderPotComponent image={productById.ReleventImgUrl} /> */}
                            {productById.imageUrl && <div className='modified-container' style={{height:"360px", overflow:"hidden"}}>
                                <img src={`${api}/${productById.ReleventImgUrl}`} alt='initial' style={{height:"100%"}}/>
                            
                            </div>}
                        </div>
                        <div className='numeric-data-container'>
                            
                            <div className='numeric-data'>
                                <span>الحرارة</span>
                                <div>
                                    <span>{productById.minTemperature}-{productById.maxTemperature}<span><i className="ri-celsius-fill"></i></span></span>
                                    <span><i className="ri-temp-hot-line"></i></span>
                                </div>
                            </div>
                            {productById.humdity? (
                                <div className='numeric-data'>
                                <span>الرطوبة</span>
                                    <div>
                                        <span>{productById.humdity}<span></span></span>
                                        <span><i className="ri-water-percent-line"></i></span>
                                    </div>
                                </div>)
                            :''}
                            <div className='numeric-data'>
                                <span>ضوء الشمس</span><br />
                                <div>
                                    <span>{productById.amountSunlight}<span>%</span></span>
                                    <span><i className="ri-sun-line"></i></span>
                                </div>
                            </div>
                            <div className='numeric-data'>
                                <span>الارتفاع</span><br />
                                <div>
                                    <span>{productById.height}<span>cm</span></span>
                                    <span><i className="ri-expand-height-fill"></i></span>
                                </div>
                            </div>
                        </div>
                        {/* <p>{productById.description}</p> */}
                    </div>
                    
                    <div className='left-content'>
                        {(productById.productImages) &&
                            // span className='separator'></span>
                            <div>
                                <h4>صور أخرى</h4>
                                <SliderMultiplePhotos />
                            </div>
                        }
                        
                    </div>
                </div>
                <div className='down-pay-container'>
                    <div className='pay-child'>
                        <button type='button' className='main-button green-button' onClick={() => handleAddToCart(productById)}>اضف لسلة المشتريات</button>
                        <Quantity quantity={quantity} onQuantityChange={handleQuantityChange} />
                    </div>
                    <div className='rating-container'>
                        <span>التقييمات</span>
                        <Rating />
                    </div>
                </div>
            </div>
         )}
            {/* <SliderPanel /> */}
        
        </>
    )
}
