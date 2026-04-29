// Diseña una función que permita convertir entre distintas unidades de medida:
// "cm", "m" y "km".
// Usa un tipo unión para representar las unidades posibles y asegúrate de validar
// correctamente los valores de entrada y salida.

type Unit = "cm" | "m" | "km";

type Conversion = {
    value: number;
    from: Unit;
    to: Unit;
}

function convertUnits(data: Conversion): number{
    let valueInMeters: number;

    switch (data.from) {
        case "cm":
            valueInMeters = data.value / 100;
            break;
        case "m":
            valueInMeters = data.value;
            break;
        case "km":
            valueInMeters = data.value * 1000
            break;
        default:
            return 0;
    }

    switch (data.to) {
        case "cm":
            return valueInMeters * 100;
        case "m":
            return valueInMeters;
        case "km":
            return valueInMeters / 1000;
        default:
            return valueInMeters;
    }
}

console.log(convertUnits({ value: 1, from: "km", to: "m" }));