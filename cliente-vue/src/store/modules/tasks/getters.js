export function tareas(state){
    return state.tareas;
}

export function completadas(state){
    return state.tareas.filter(tarea => tarea.estado === true);
}

export function incompletas(state){
    return state.tareas.filter(tarea => tarea.estado === false);
}