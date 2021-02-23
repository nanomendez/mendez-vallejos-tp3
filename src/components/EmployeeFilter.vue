<template>
  <div class="row m-3">
    <div class="col-md-2">
      <!-- Clean filters button -->
      <div class="row justify-content-center mt-3">
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          @click="clearFilters"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
    <div class="col-md-5">
      <div class="form-group">
        <label for="last-name-filter-input">Apellido</label>
        <input
          type="text"
          class="form-control"
          id="last-name-filter-input"
          placeholder="Ingrese parte del Apellido"
          v-model="lastName"
          v-focus
          @keyup="changeLastName"
        />
      </div>
    </div>
    <div class="col-md-5">
      <div class="form-group">
        <label for="category-filter-input">Categoría</label>
        <select
          class="form-control"
          id="category-filter-input"
          v-model="category"
          @change="changeCategory"
        >
          <option>--Todos--</option>
          <option>Administrativo</option>
          <option>Botones</option>
          <option>Conserje</option>
          <option>Gerente</option>
          <option>Mantenimiento</option>
          <option>Mucama</option>
          <option>Telefonista</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import { ALL_CATEGORIES } from "../constants"
export default {
  data() {
    return {
      lastName: "",
      category: ALL_CATEGORIES,
    };
  },
  methods: {
    changeLastName() {
      this.$emit("onChangeLastName", this.lastName);
    },
    changeCategory() {
      this.$emit("onChangeCategory", this.category);
    },
    clearFilters() {
      this.lastName = "";
      this.category = ALL_CATEGORIES;
      this.changeLastName();
      this.changeCategory();
    },
  },
};
</script>
<style lang=""></style>
