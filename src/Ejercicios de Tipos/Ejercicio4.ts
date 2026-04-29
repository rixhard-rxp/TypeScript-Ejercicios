// Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
// "email") y valor (que puede ser string o number).
// Desarrolla una función que valide una lista de campos y devuelva los nombres de
// los campos inválidos según su tipo.

type FieldType = "text" | "number" | "email";

type FormField = {
    name: string;
    type: FieldType;
    value: string | number;
}

const FormFields: FormField[] = [
    { name: "name_usuario", type: "text", value: "Hola" },
    { name: "edad", type: "number", value: "25" },
    { name: "correo", type: "email", value: "juan@web.com" },
    { name: "telefono", type: "number", value: 3101232344 }
];

function validateFields(FormFields: FormField[]): string[] {
    const invalidFields: string[] = [];

    FormFields.forEach(FormField => {
        switch (FormField.type) {
            case "text":
                if (typeof FormField.value !== "string") {
                    invalidFields.push(FormField.name);
                }
                break;
            case "number":
                if (typeof FormField.value !== "number") {
                    invalidFields.push(FormField.name);
                }
                break;
            case "email":
                if (typeof FormField.value !== "string" || !FormField.value.includes("@")) {
                    invalidFields.push(FormField.name);
                }
                break;
        }
    });
    return invalidFields;
}

const errors = validateFields(FormFields);
console.log("Campos inválidos detectados:", errors);