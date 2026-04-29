// Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
// "examen") y nota.
// Escribe una función que calcule el promedio por categoría para un estudiante
// específico.
const allQualifications = [
    { idStudent: 1, subject: "Programación", category: "tareas", qualification: 4.5 },
    { idStudent: 1, subject: "Programación", category: "tareas", qualification: 3.5 },
    { idStudent: 1, subject: "Programación", category: "quices", qualification: 5.0 },
    { idStudent: 2, subject: "Bases de Datos", category: "tareas", qualification: 2.0 }
];
function CalculateAverageByCategory(qualifications, searchedId) {
    const sumas = { tareas: 0, quices: 0, examen: 0 };
    const conteos = { tareas: 0, quices: 0, examen: 0 };
    qualifications.forEach(qualification => {
        if (qualification.idStudent === searchedId) {
            switch (qualification.category) {
                case "tareas":
                    sumas.tareas += qualification.qualification;
                    conteos.tareas++;
                    break;
                case "quices":
                    sumas.quices += qualification.qualification;
                    conteos.quices++;
                    break;
                case "examen":
                    sumas.examen += qualification.qualification;
                    conteos.examen++;
                    break;
            }
        }
    });
    return {
        PromedioTareas: conteos.tareas > 0 ? sumas.tareas / conteos.tareas : 0,
        PromedioQuices: conteos.quices > 0 ? sumas.quices / conteos.quices : 0,
        PromedioExamen: conteos.examen > 0 ? sumas.examen / conteos.examen : 0
    };
}
const resumeStudent1 = CalculateAverageByCategory(allQualifications, 1);
console.log("Resumen Estudiante 1:", resumeStudent1);
export {};
