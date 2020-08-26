import axios from 'axios';

export function getTareas({ commit }){
    return new Promise((resolve, reject) =>{
        axios.get('tasks').then( response => {
            resolve(response)
            commit('setTareas', response.data)
        }).catch( error => {
            reject(error)
        })
    })
}

export function addTarea({ dispatch }, data){
    return new Promise((resolve, reject) =>{
        axios.post('tasks',{
            tarea: data
        }).then( response =>{
            resolve(response)
            dispatch('getTareas')
        }).catch(error =>{
            reject(error)
        })
    })
}

export function editTarea({ dispatch }, data){
    return new Promise((resolve, reject) =>{
        axios.patch(`tasks/${data.id}`,{
            tarea: data.tarea
        }).then( response =>{
            resolve(response)
            dispatch('getTareas')
        }).catch(error =>{
            reject(error)
        })
    })
}

export function changeStatus({ dispatch }, idTarea){
    return new Promise((resolve, reject)=>{
        axios.put(`tasks/${idTarea}`).then(response => {
            resolve(response)
            dispatch('getTareas')
        }).catch(error =>{
            reject(error)
        })
    })
}

export function deleteTarea({ dispatch },idTarea){
    return new Promise((resolve, reject)=>{
        axios.delete(`tasks/${idTarea}`).then(response => {
            resolve(response)
            dispatch('getTareas')
        }).catch(error =>{
            reject(error)
        })
    })
}