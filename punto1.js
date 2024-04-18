/* Definir una interfaz para representar un producto:
a. La interfaz debe incluir propiedades para el nombre, el precio y la categoría
del producto.
b. Crear una clase que implemente la interfaz de producto.
c. Instanciar un objeto de producto y asignarle valores a sus propiedades. */
var Item = /** @class */ (function () {
    function Item(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Item;
}());
var shampoo = new Item("Shampoo", 10000, "Aseo");
console.log(shampoo);
console.log(typeof shampoo);
