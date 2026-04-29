// Modela un historial de cambios de un usuario, donde cada cambio puede ser de
// nombre, correo o contraseña.
// Escribe una función que reciba una lista de estos cambios y devuelva un resumen
// con el número de veces que se cambió cada uno.

export {}

type type = "name" | "email" | "password";

type UserChange = {
    type: type;
    previousValue: string;
    newValue: string;
}

const changesList: UserChange[] = [
    { type: "name", previousValue: "Rico", newValue: "Ricardo" },
    { type: "email", previousValue: "a@b.com", newValue: "r@b.com" },
    { type: "name", previousValue: "Ricardo", newValue: "Richie" }
];

function generateChangeSummary(record: UserChange[]) {

    const resume = {
        message: "Resumen:",
        nombre: 0,
        email: 0,
        password: 0
    };

    record.forEach(change => {
        switch (change.type) {
            case "name":
                resume.nombre = resume.nombre + 1;
                break;
            case "email":
                resume.email = resume.email + 1;
                break;
            case "password":
                resume.password = resume.password + 1;
        }
    });

    return resume;
}

const myResume = generateChangeSummary(changesList);
console.log(myResume);