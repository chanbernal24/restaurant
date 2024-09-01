const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);

let data = [
    {
        "name" : "Chicken",
        "price" : 24.00,
        "imageURL" : images('./chicken.png')
    },
    {
        "name" : "Vegan Sushi",
        "price" : 5.00,
        "imageURL" : images('./vegan-sushi.png')
    },
    {
        "name" : "Caviar",
        "price" : 65.00,
        "imageURL" : images('./caviar.png')
    },
    {
        "name" : "Ramen",
        "price" : 16.00,
        "imageURL" : images('./ramen.png')
    },
    {
        "name" : "Sushi",
        "price" : 4.00,
        "imageURL" : images('./sushi.png')
    },
    {
        "name" : "Noodles",
        "price" : 8.00,
        "imageURL" : images('./noodles.png')
    },
    {
        "name" : "Pork Udon",
        "price" : 18.00,
        "imageURL" : images('./pork-udon.png')
    },
    {
        "name" : "Salmon",
        "price" : 9.00,
        "imageURL" : images('./salmon.png')
    },


    
]

export default data