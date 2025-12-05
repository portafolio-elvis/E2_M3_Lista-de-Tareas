let listaDeTareas = [];

let agregarMas = true;

do {
  let nuevaTarea = prompt("Escriba una nueva tarea:");
  listaDeTareas.push(nuevaTarea);
  agregarMas = confirm("¿Quiere agregar otra tarea?");
} while (agregarMas);

console.log("-> Lista de Tareas Pendientes <-");

for (let i = 0; i < listaDeTareas.length; i++) {
  console.log(i + 1 + " " + listaDeTareas[i]);
}
