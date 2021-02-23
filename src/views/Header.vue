<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="../assets/images/paradise-hotel.png" width="75" alt="Logo Paradise" />
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
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/rooms">Habitaciones</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Actividades</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/employees">Employees</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="css">
#navbarSupportedContent a.router-link-active {
  color: rgba(255, 255, 255, 0.5);
}
#navbarSupportedContent a.router-link-exact-active {
  color: rgba(255, 255, 255);
}
</style>
