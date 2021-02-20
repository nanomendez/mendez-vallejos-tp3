<template>
  <div>
    <Header />

    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="../assets/images/habitacion-lujo-frente-al-mar-1.jpg"
            class="img-fluid"
            alt="Habitacion Lujo Frente al Mar"
          />
        </div>
        <div class="col-md-6 bg-light text-dark">
          <h2 class="color-goldenrod mt-3">Habitación Lujo Frente al Mar</h2>
          <p class="font-room-description mt-2">
            Las confortables Habitaciones Lujo disponen de dos camas de 1,20 x 2 m, o una
            cama de 2 x 2 m. Capacidad máxima de alojamiento para 2 adultos, 1 niño (2 - 5
            años) y 1 bebé (0 - 2 años) dividiendo cama. Cuenta con balcón con vista
            Frontal o Lateral para el mar.
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="../assets/images/habitacion-lujo-familia.jpg"
            class="img-fluid"
            alt="Habitacion Familia Frente al Mar"
          />
        </div>
        <div class="col-md-6 bg-light text-dark">
          <h2 class="color-goldenrod mt-3">Habitación Lujo Familia Frente al Mar</h2>
          <p class="font-room-description mt-2">
            Las amplias Lujo Familiar disponen de dos camas de 1,60 x 2 m, o una cama de
            1,60 x 2 m y una de 1,20x2. Capacidad máxima de alojamiento para 4 personas.
            Cuentan con balcón con vista Frontal o Lateral para el mar.
          </p>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="../assets/images/habitacion-junior-suite.jpg"
            class="img-fluid"
            alt="Junior Suite Frente al Mar"
          />
        </div>
        <div class="col-md-6 bg-light text-dark">
          <h2 class="color-goldenrod mt-3">Junior Suite Frente al Mar</h2>
          <p class="font-room-description mt-2">
            Las Suite Junior disponen de 2 ambientes separados por una puerta corredera:
            la habitación principal y salón con sofá cama doble, cada división con baño
            independiente. Cuenta con balcón con vista Frontal o Lateral para el mar.
          </p>
          <p class="font-room-description mt-2">
            La Suite dispone de una cama de 2 x 2m y un baño con ducha y bañera.
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang=""></style>
