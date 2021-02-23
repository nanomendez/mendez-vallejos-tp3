<template>
  <tr>
    <td>{{ employee.id }}</td>
    <td>{{ employee.first_name | capitalizeEveryWord }}</td>
    <td>{{ employee.last_name | capitalizeEveryWord }}</td>
    <td>{{ employee.phone }}</td>
    <td>{{ employee.category }}</td>
    <td>{{ employee.salary | pesosArgentinos }}</td>
    <td>
      <button type="button" class="btn btn-outline-info" @click="editEmployee">
        Editar
      </button>
      <button type="button" class="btn btn-outline-danger ml-2" @click="deleteEmployee">
        Borrar
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  props: {
    employee: Object,
  },
  methods: {
    editEmployee() {
      this.$emit("onEditEmployee", this.employee);
    },
    deleteEmployee() {
      this.$emit("onDeleteEmployee", this.employee.id);
    },
  },
  filters: {
    capitalizeEveryWord: function (value) {
      return value.split(" ")
         .map( element => `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`)
         .join(" ");
    },
    pesosArgentinos: function (value) {
      const val = (value / 1).toFixed(2).replace(".", ",");
      return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style lang=""></style>
