// Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
// "tecnología", "papelería").
//Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
// categoría:
// alimentos: menos de 20 unidades
// tecnología: menos de 5 unidades
// papelería: menos de 50 unidades
const products = [
    { id: 1, name: "Manzana", amount: 13, category: "alimentos" },
    { id: 3, name: "IPhone", amount: 11, category: "tecnología" },
    { id: 4, name: "Lapiz Negro", amount: 12, category: "papelería" },
];
function statusStock(product) {
    switch (product.category) {
        case "alimentos":
            return product.amount < 20;
        case "tecnología":
            return product.amount < 5;
        case "papelería":
            return product.amount < 50;
        default:
            return false;
    }
}
products.forEach(product => {
    if (statusStock(product)) {
        console.log("El producto ", product.name, "tiene bajo stock ", product.amount, " unidades).");
    }
    else {
        console.log("El producto ", product.name, "tiene stock suficiente.");
    }
});
export {};
