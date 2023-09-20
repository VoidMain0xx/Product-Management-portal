export default class productModel{
    constructor( ID , NAME , DESC , PRICE , IMAGEURL){
            this.id =  ID;
            this.name = NAME;
            this.desc = DESC;
            this.price = PRICE;
            this.imageurl = IMAGEURL;
    }
    static get(){
        return Product;
    }
    static add(name , desc , price , imageurl){
        let addNewProduct = new productModel(
            Product.length + 1,
            name,
            desc,
            price,
            imageurl
        )
        Product.push(addNewProduct);
    }

    static getById(id){
        return Product.find((p) => p.id == id);
    }

    static delete(id){
        const index = Product.findIndex(p => p.id == id);
        Product.splice(index , 1);
    }
}

var Product = [
    new productModel( 1 , 'janacjkjacn' , 'desc 1' , 85 , 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FModel%25E2%2580%2593view%25E2%2580%2593controller&psig=AOvVaw0netYYH4p3blqkZmVlQKO_&ust=1694332516641000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjwrNGGnYEDFQAAAAAdAAAAABAQ') ,

    new productModel( 2 , 'product Description 2' , 'desc 2' , 85 , 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FModel%25E2%2580%2593view%25E2%2580%2593controller&psig=AOvVaw0netYYH4p3blqkZmVlQKO_&ust=1694332516641000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjwrNGGnYEDFQAAAAAdAAAAABAQ') ,

    new productModel( 3 , 'product Description 3' , 'desc 3' , 85 , 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FModel%25E2%2580%2593view%25E2%2580%2593controller&psig=AOvVaw0netYYH4p3blqkZmVlQKO_&ust=1694332516641000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjwrNGGnYEDFQAAAAAdAAAAABAQ')
]