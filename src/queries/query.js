const getProductList = `
    {
        plants {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            imageUrl
            height
            
        }
    }
`;

const getProductsWithLimit = `
    {
        paginatedPlants (first: 3){
            nodes{
                id
                name
                defaultPrice
                imageUrl
            }
        }
    }
`;


const getProductById = `
    query PlantById($productId: Int!) {
        plantById(id: $productId) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            quantity
            height
            imageUrl
            ReleventImgUrl
        }
    }
`;

const getPotProduct = `
    query PotProducts {
        potProducts {
            name
            id
            colors
            imageUrl
            material
            ReleventImgUrl
            potVariations {
                sizes
                variationId
                price
                imageUrl
                ReleventImgUrl
            }
        }
    }

`

const getAddedProductsToCart = `
    id,
    productName,
    description,
    image,
    quantity

`;

const getPlantNameSearchResult =`
    query GetPlants($searchString: String!) {
        plants(where: { name: { contains: $searchString } }) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            height
            imageUrl
        }
    }
    
`;
const getFilteredPlants = `
    query GetPlants(
        $orderName: SortEnumType,
        $orderPrice: SortEnumType,
        $soilType: SoilType
    ) {
        plants(
            order: {
                name: $orderName,
                defaultPrice: $orderPrice
            },
            where: {
                soilType: { eq: $soilType }
            }
        ) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            height
            imageUrl
        }
    }
`
const getProductsByOrderPrice = `
    query GetPlants($defaultPrice: SortEnumType) {
        plants(order: {defaultPrice: $defaultPrice}) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            height
            imageUrl 
        }
    }

`;

const getProductsByOrderName = `
    query GetPlants($name: SortEnumType) {
        plants(order: {name: $name}) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            height
            imageUrl
        }
    }

`;

const getProductsBySoilType = `
    query GetPlants($soilType: SoilType!) {
        plants(where: {soilType: {eq: $soilType}}) {
            id
            name
            description
            soilType
            defaultPrice
            amountOfWater
            amountSunlight
            minTemperature
            maxTemperature
            humdity
            height
            imageUrl
        }
    }

`;

const getRecommendedArticles = `
    query RecommendedArticles {
        recommendedArticles(pageSize: 3, pageNumber: 1) {
            ReleventImgUrl
            id
            slug
            title
            introImgUrl
            published
            publishDate
            sections {
                ReleventImgUrl
                sequence
                heading
                contentText
                imgUrl
            }
        }
    }

`

const getPublichedArticles = `
    query PublishedArticles {
        publishedArticles {
            ReleventImgUrl
            id
            slug
            title
            introImgUrl
            published
            publishDate
            author {
                id
                userName
                firstName
                lastName
                image
                totalFolloweesCount
                totalFollowersCount
                ReleventImgUrl
            }
            sections {
                ReleventImgUrl
                sequence
                heading
                contentText
                imgUrl
            }
            tags {
                articleId
                tagId
            }
        }
    }
`;

const getAllArticles = `
    query AllArticles {
        allArticles {
            ReleventImgUrl
            id
            slug
            title
            introImgUrl
            published
            publishDate
            tags {
                articleId
                tagId
            }
            sections {
                ReleventImgUrl
                sequence
                heading
                contentText
                imgUrl
            }
            author {
                id
                userName
                firstName
                lastName
                image
                totalFolloweesCount
                totalFollowersCount
                ReleventImgUrl
            }
        }
    }
`;

const getPendingArticle = `
    query AllArticles {
        allArticles(where: { published: { eq: false } }) {
            ReleventImgUrl
            id
            slug
            title
            introImgUrl
            published
            publishDate
            author {
                id
                userName
                firstName
                lastName
                image
                totalFolloweesCount
                totalFollowersCount
                ReleventImgUrl
            }
            sections {
                ReleventImgUrl
                sequence
                heading
                contentText
                imgUrl
            }
            tags {
                articleId
                tagId
            }
        }
    }
`;

const getWriterArticles = `  
    query WriterArticles {
        writerArticles {
            ReleventImgUrl
            id
            slug
            title
            introImgUrl
            published
            publishDate
            sections {
                ReleventImgUrl
                sequence
                heading
                contentText
                imgUrl
            }
        }
    }        
`;

const getArticleById = `

`;

const getRecommendedPosts = `
    query RecommendedPosts {
        recommendedPosts(pageSize: 50, pageNumber: 0) {
            id
            text
            imageUrl
            totalComments
            totalLikes
            postAudience
            createdAt
            ReleventImgUrl
            Author {
                id
                userName
                firstName
                lastName
                image
                totalFolloweesCount
                totalFollowersCount
                ReleventImgUrl
            }
            comments {
                id
                postId
                userId
                content
                totalLikes
                createdAt
                Author {
                    id
                    userName
                    firstName
                    lastName
                    image
                    DateofBirth
                    totalFolloweesCount
                    totalFollowersCount
                    ReleventImgUrl
                }
            }
        }
    }   
`

// const getRecommendedPosts = `
//     query RecommendedPosts {
//     recommendedPosts(
//         pageSize: 50
//         pageNumber: 0
//         where: { postAudience: { eq: PUBLIC } }
//     ) {
//         id
//         text
//         imageUrl
//         totalComments
//         totalLikes
//         postAudience
//         createdAt
//         ReleventImgUrl
//         comments {
//             id
//             postId
//             userId
//             content
//             totalLikes
//             createdAt
//         }
//     }
// }

// `

const getRecommndedUsers = `
    query FollowRecommendations {
        followRecommendations {
            id
            userName
            firstName
            lastName
            image
            totalFolloweesCount
            totalFollowersCount
            ReleventImgUrl
        }
    }

`;

const getUsersById = `
    query UserByIdWithPosts($id : Int!) {
        userByIdWithPosts(id: $id) {
            IsLikedByMe
            reactionType
            post {
                id
                text
                imageUrl
                totalComments
                totalLikes
                postAudience
                createdAt
                ReleventImgUrl
                comments {
                    id
                    postId
                    userId
                    content
                    totalLikes
                    createdAt
                    Author {
                        id
                        userName
                        firstName
                        lastName
                        image
                        totalFolloweesCount
                        totalFollowersCount
                        ReleventImgUrl
                    }
                }
                Author {
                    id
                    userName
                    firstName
                    lastName
                    image
                    totalFolloweesCount
                    totalFollowersCount
                    ReleventImgUrl
                }
            }
        }
    }

`


export { getFilteredPlants, getPotProduct, getProductList, getProductById, getRecommendedArticles, getPublichedArticles, getPendingArticle, getAllArticles, getProductsWithLimit, getAddedProductsToCart, getPlantNameSearchResult, getProductsByOrderName, getProductsByOrderPrice, getProductsBySoilType, getRecommendedPosts, getRecommndedUsers, getUsersById};