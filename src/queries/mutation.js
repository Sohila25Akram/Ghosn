const createPlantMutation = `
    mutation CreatePlant(
      $name: String!,
      $description: String!,
      $quantity: Int!,
      $price: Float!,
      $amountOfWater: Int!,
      $amountSunlight: Int!,
      $soilType: String!,
      $humidity: String!,
      $minTemperature: Int!,
      $maxTemperature: Int!,
      $height: Float!,
      $categoryId: Int!
    ) {
      createPlant(
        input: {
          name: $name,
          description: $description,
          quantity: $quantity,
          price: $price,
          amountOfWater: $amountOfWater,
          amountSunlight: $amountSunlight,
          soilType: $soilType,
          humidity: $humidity,
          minTemperature: $minTemperature,
          maxTemperature: $maxTemperature,
          height: $height,
          categoryId: $categoryId
        }
      ) {
        id
        name
        description
      }
    }
`;



export {createPlantMutation};