"use strict";
// Define una unión de tipos para representar notificaciones por email, SMS y push.
// Cada una debe tener propiedades distintas.
// Implementa una función enviarNotificacion que reciba una notificación y ejecute
// una lógica distinta dependiendo del tipo (usando type narrowing).
const miPrueba = {
    corner: "Notificacion en la esquina"
};
function sendNotification(notification) {
    if ("receiver" in notification) {
        console.log("Enviando Mensaje a: ", notification.receiver, " : ", notification.message);
    }
    else if ("number" in notification) {
        console.log("Enviando Mensaje al: ", notification.number, " : ", notification.message);
    }
    else if ("corner" in notification) {
        console.log("Mostrando push en la esquina: ", notification.corner);
    }
}
sendNotification(miPrueba);
