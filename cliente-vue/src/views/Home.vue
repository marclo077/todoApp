<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color: #35495e">
      <b-navbar-brand href="#">Todo App - VueJS </b-navbar-brand>
    </b-navbar>
    <b-container class="mt-5">
      <b-img :src="require('../assets/logo.png')" height="100px;"></b-img>
      <h4>Lista de Tareas</h4>
      <task-list></task-list>
    </b-container>
  </div>
</template>

<script>
import TaskList from '../components/TaskList';
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components: {
    TaskList
  }
}
</script>
