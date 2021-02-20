<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <!-- <img src="./assets/images/paradise-hotel.png" width="75" alt="Logo Paradise"> -->
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Inicio</router-link>
          <!-- <a class="nav-link" href="#">Inicio</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rooms">Habitaciones</router-link>
          <!-- <a class="nav-link" href="habitaciones.html">Habitaciones</a> -->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Actividades</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/employees">Employees</router-link>
          <!-- <a class="nav-link" href="empleados.html">Empleados</a> -->
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang=""></style>
