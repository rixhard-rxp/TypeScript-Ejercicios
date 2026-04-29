// Crea un tipo Usuario con nombre, edad, estado activo y rol ("admin", "editor",
// "visitante").
// Implementa una función que devuelva únicamente los usuarios que sean mayores
// de edad, estén activos y no tengan el rol de visitante.

type rolUser = "admin" | "editor" | "visitante";

type User = {
    name: string,
    age: number,
    state: boolean,
    rol: rolUser
};

const usersList: User[] = [
    { name: "Ricardo", age: 20, state: true, rol: "admin" },
    { name: "Andrés", age: 17, state: true, rol: "editor" },
    { name: "Laura", age: 25, state: false, rol: "admin" },
    { name: "Santi", age: 30, state: true, rol: "visitante" }
];

function filterUsers(users: User[]): User[] {
    const filteredUsers: User[] = [];

    users.forEach(user => {
        if (user.age >= 18 && user.state == true && user.rol !== "visitante") {
            filteredUsers.push(user);
        }
    });

    return filteredUsers;
}

const result = filterUsers(usersList);
console.log("Usuarios que cumplen los requisitos: ", result);

