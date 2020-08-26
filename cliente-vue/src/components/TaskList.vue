<template>
    <div>
        <div class="mb-3 inline">
            <b-input-group class="mt-3">
                <b-form-input v-model="tarea"></b-form-input>
                <b-input-group-append>
                    <b-button variant="success" @click="agregar()" :disabled="!tarea.length"><b-icon icon="plus"></b-icon> Agregar</b-button>
                </b-input-group-append>
            </b-input-group>
        </div>
        <b-list-group class="mb-3">
            <b-list-group-item v-for="item in filtrar" :key="item.id" >
                <task-item :task="item" :estado="item.estado" @listar="listar()"></task-item>
            </b-list-group-item>
        </b-list-group>
        <b-list-group>
            <b-list-group-item class="d-flex justify-content-between">
                <div>
                    <b-button size="sm" variant="outline-success" class="mr-1" @click="estado=''">Todos <b-badge variant="warning">{{ tareas.length }}</b-badge></b-button>
                    <b-button size="sm" variant="outline-dark" class="mr-1" @click="estado=true">Completadas <b-badge variant="success">{{ completadas.length }}</b-badge></b-button>
                    <b-button size="sm" variant="outline-dark" @click="estado=false">Incompletas <b-badge variant="danger">{{ incompletas.length }}</b-badge></b-button>
                </div>
                <div>
                    Total Tareas: <b-badge variant="warning">{{ tareas.length }}</b-badge>
                </div> 
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import TaskItem from './TaskItem';
export default {
    name: 'TaskListComponent',
    data() {
        return {
            tarea: '',
            estado: ''
        }
    },
    computed: {
        ...mapGetters('mtareas', ['tareas', 'completadas', 'incompletas']),
        filtrar: function(){
            if(this.estado !== '')
                return this.tareas.filter(tarea => tarea.estado === this.estado);
            else
                return this.tareas;
        }

    },
    components: {
        TaskItem,
    },
    methods: {
        ...mapActions('mtareas', ['getTareas', 'addTarea', 'deleteTarea', 'changeStatus']),

        listar(){
            this.getTareas();
        },

        agregar(){
            this.addTarea(this.tarea).then( () => {
                this.tarea = '';
            }).catch( error => {
                console.log(error);
            })
        },
        
    },
    mounted() {
        this.listar();
    },
}
</script>