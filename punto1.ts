interface Product{
    name:string;
    price: number;
    category: string;
} 

class Item implements Product{

    name:string;
    price: number;
    category: string;


    constructor (name:string, price:number, category:string){
        this.name=name;
        this.price=price;
        this.category=category;
    }
}

const shampoo= new Item ("Shampoo", 10000, "Aseo")

console.log(shampoo);
console.log(typeof shampoo);
