//Crea un tipo Tarea que tenga las propiedades: id, descripción, si está completada,
//y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
//Implementa una función que reciba una lista de tareas y devuelva solo aquellas
//que estén en progreso o pendientes.

export {}

type StateTask = "Pendiente" | "En_Progreso" | "Finalizada";

type Task = {
    id: number;
    description: string;
    completeTask: boolean;
    taskStatus: StateTask;
}

const tasks: Task[] = [
  { id: 1, description: "28", completeTask: true, taskStatus: "Pendiente" },
  { id: 2, description: "24", completeTask: false, taskStatus: "En_Progreso" },
  { id: 3, description: "35", completeTask: false, taskStatus: "Finalizada" },
  { id: 4, description: "30", completeTask: true, taskStatus: "Pendiente" },
  { id: 5, description: "40", completeTask: true, taskStatus: "En_Progreso" },
];

function getTasksInProgressOrPending(tasks: Task[]) {
    const result = tasks.filter((task: Task) => task.taskStatus !== "Finalizada");
    console.log("Tareas: ", result);
    return result;
}

getTasksInProgressOrPending(tasks);