<template>
    <div>
        <div class="d-flex justify-content-between">
            <b-form-checkbox
                v-model="status"
                :value="true"    
                :unchecked-value="false" 
                @change="cambiarEstado(task.id)"
            >
                <p v-bind:class="{'tachar': task.estado}">{{ task.tarea }}</p>
            </b-form-checkbox>

            <div>
                <b-button pill variant="primary" size="sm" class="mr-1" @click="modalShow = !modalShow"><b-icon icon="pencil"></b-icon></b-button>
                <b-button pill variant="danger" size="sm" @click="eliminar(task.id)"><b-icon icon="trash"></b-icon></b-button>
            </div>
        </div>
        <b-modal v-model="modalShow" title="Modificar Tarea">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                label="Tarea"
                >
                    <b-form-input
                        v-model="tarea"
                        required
                    ></b-form-input>
                </b-form-group>
            </form>
            <template v-slot:modal-footer>
                <b-button size="sm" variant="success" @click="editar(task.id)" :disabled="!tarea">
                    <b-icon icon="check"></b-icon> Modificar
                </b-button>
                <b-button size="sm" variant="danger" @click="modalShow = false">
                    <b-icon icon="x"></b-icon> Cancelar
                </b-button>
            </template>
        </b-modal>
    </div>
    
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'ItemTaskComponent',
    props: {
        task: {
            type: Object,
            required: true
        },
        estado: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            status: this.estado,
            modalShow: false,
            tarea: this.task.tarea,
        }
    },
    methods: {
        ...mapActions('mtareas', ['deleteTarea', 'editTarea', 'changeStatus']),

        cambiarEstado(idTarea){
            this.changeStatus(idTarea).then( () => {
                this.$emit('listar', null);
            }).catch( error => {
                console.log(error);
            })
        },

        eliminar(idTarea){
            this.deleteTarea(idTarea).then( () => {
                this.$emit('listar', null);
            }).catch( error => {
                console.log(error);
            })
        },

        editar(idTarea){
            let payload = { id: idTarea, tarea: this.tarea };
            this.editTarea(payload).then( () => {
                this.modalShow = false;
                this.$emit('listar', null);
            }).catch( error => {
                console.log(error);
            })
        }
    },
}
</script>
<style>
.tachar {
    text-decoration: line-through;
}
</style>