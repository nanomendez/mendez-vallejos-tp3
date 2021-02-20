<template lang="">
    <tr>
        <td>{{employee.id}}</td>
        <td>{{employee.first_name}}</td>
        <td>{{employee.last_name}}</td>
        <td>{{employee.phone}}</td>        
        <td>{{employee.category}}</td>
        <td>{{employee.salary}}</td>   
        <td>
            <button type="button" class="btn btn-outline-info" @click="editEmployee">Editar</button>
            <button type="button" class="btn btn-outline-danger ml-2" @click="deleteEmployee">Borrar</button>
        </td>     
    </tr>
</template>
<script>
export default {
    props: {
        employee: Object
    }, 
    methods: {
        editEmployee() {
            this.$emit('onEditEmployee', this.employee);
        }, 
        deleteEmployee() {
            this.$emit('onDeleteEmployee', this.employee.id)
        }
    }
    
}
</script>
<style lang="">
    
</style>