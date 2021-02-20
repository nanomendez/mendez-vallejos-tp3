<template>
  <div>
    <Header />

    <!-- Welcome -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1>Bienvenidos al Paraíso</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Presentation -->
    <div class="container mt-3 mb-3 pt-3">
      <div class="row align-items-center text-center">
        <div class="col-lg-6 text-justify">
          <h1>PARADISE Hotel & Resort</h1>
          <p class="mt-3 font-presentation">
            Bienvenido a la Web Oficial del
            <span class="font-weight-bold color-goldenrod">PARADISE Hotel & Resort</span>,
            un Resort 5 estrellas localizado en Cabo Esperanza, Atlantida.
          </p>
          <p class="font-presentation">
            Se destaca por su moderno y elegante diseño y sobre todo por la calidad de sus
            servicios e instalaciones
          </p>
        </div>
        <div class="col-md-4 col-lg-2 mt-3">
          <img src="../assets/images/icon-swim.png" alt="Logo Piletas" />
          <h5 class="mt-1 color-goldenrod">4 piscinas</h5>
        </div>
        <div class="col-md-4 col-lg-2 mt-3">
          <img src="../assets/images/icon-restaurant.png" alt="Logo Restaurant" />
          <h5 class="mt-1 color-goldenrod">5 restaurants</h5>
        </div>
        <div class="col-md-4 col-lg-2 mt-3">
          <img src="../assets/images/icon-experiences.png" alt="Logo Experiencias" />
          <h5 class="mt-1 color-goldenrod">60 experiencias</h5>
        </div>
      </div>
    </div>
    <!-- Carousel -->
    <div class="container d-none d-sm-block mt-3">
      <div class="row">
        <div class="col-12">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/slides/slide-hotel-1.jpg"
                  class="d-block w-100"
                  alt="Foto Pileta Principal"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/slides/slide-hotel-2.jpg"
                  class="d-block w-100"
                  alt="Foto Complejo y Playa"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/slides/slide-hotel-3.jpg"
                  class="d-block w-100"
                  alt="Foto Lobby Hotel"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/slides/slide-hotel-4.jpg"
                  class="d-block w-100"
                  alt="Foto Pileta Interior 1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/slides/slide-hotel-5.jpg"
                  class="d-block w-100"
                  alt="Foto Terraza Suite"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Customers Cards -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-3 mt-3">
          <div class="card card-section-customer h-100">
            <div class="card-header card-header-customer rounded p-3">
              <h5 class="card-title text-center">"Majestuoso..."</h5>
            </div>
            <div class="card-body">
              <h6 class="color-goldenrod">Facebook</h6>
              <p class="card-text">
                Pasamos nuestras mejores vacaciones en este majestuoso hotel. El mejor
                lugar de toda la Atlantida.
              </p>
            </div>
            <div class="card-footer text-muted">
              <i>- Ignacio López Rentería</i>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mt-3">
          <div class="card card-section-customer h-100">
            <div class="card-header card-header-customer rounded p-3">
              <h5 class="card-title text-center">"Súper Completo..."</h5>
            </div>
            <div class="card-body">
              <h6 class="color-goldenrod">Google</h6>
              <p class="card-text">
                Un gran hotel con un all inclusive súper completo y gran variedad de
                comidas y tragos. Las piletas son un sueño.
              </p>
            </div>
            <div class="card-footer text-muted">
              <i>- Mia Wolktasnen</i>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mt-3">
          <div class="card card-section-customer h-100">
            <div class="card-header card-header-customer rounded p-3">
              <h5 class="card-title text-center">"Excelente atención..."</h5>
            </div>
            <div class="card-body">
              <h6 class="color-goldenrod">Twitter</h6>
              <p class="card-text">
                Necesitábamos un descanso y aquí lo encontramos. Una excelente atención de
                todo el personal, volveremos el año entrante.
              </p>
            </div>
            <div class="card-footer text-muted">
              <i>- Leticia Espindola</i>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-3 mt-3">
          <div class="card card-section-customer h-100">
            <div class="card-header card-header-customer rounded p-3">
              <h5 class="card-title text-center">"Mucha diversión..."</h5>
            </div>
            <div class="card-body">
              <h6 class="color-goldenrod">Facebook</h6>
              <p class="card-text">
                El hotel cuenta con un plantel capacitado y un montón de actividades que
                aseguran mucha diversión para los turistas. Realmente quedamos fascinados.
              </p>
            </div>
            <div class="card-footer text-muted">
              <i>- Otto Van Trasstensen</i>
            </div>
          </div>
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
