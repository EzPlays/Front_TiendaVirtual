<template>
  <div>

    <Navbar />

    <div class="container card login w-50">
      <div class="card-header text-center">Crear producto</div>
      <div class="card-body">
        <form class="" @submit.prevent="CrearProducto()">
          <div class="mb-4 col-auto">
            <label for="Nombre" class="form-label">Nombre</label>
            <input v-model="producto.nombre" required type="text" class="form-control" id="Nombre"
              autocomplete="off">
          </div>
          <div class="mb-4 col-auto">
            <label for="Descripcion" class="form-label">Descripcion</label>
            <textarea required v-model="producto.descripcion" class="form-control" name="Descripcion" id="Descripcion" rows="3" ></textarea>
            <!-- <input v-model="producto.descripcion" required type="" class="form-control" id="Descripcion"
              autocomplete="off"> -->
          </div>
          <div class="mb-4 col-auto">
            <label for="Costo" class="form-label">Costo</label>
            <input v-model="producto.costo" required type="number" class="form-control" id="Costo"
              autocomplete="off">
          </div>
          <div class="mb-4 col-auto">
            <label for="precio_venta" class="form-label">Precio de venta</label>
            <input v-model="producto.precio_venta" required type="number" class="form-control" id="precio_venta"
              autocomplete="off">
          </div>
          <div class="d-grid gap-2 mx-auto col-4">
            <button type="submit" class="btn btn-secondary mb-3">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer />

  </div>
</template>
  
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { productosGetAndPost } from "../views/rutas.js";
export default {
  name: "CrearProductoView",

  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      producto: {
        nombre: "",
        descripcion: "",
        costo: "",
        precio_venta: "",
      },
    };
  },

  mounted() {
    if (localStorage.token != null) {
      
    } else {
      this.$router.push("/login");
    }
  },

  methods: {
    CrearProducto() {
      axios
        .post(
          productosGetAndPost,
          this.producto,
          {
            validateStatus: function (status) {
              return status < 500; // Resuelve solo si el código de estado es menor que 500
            },
          },
        )
        .then((response) => {
          this.$router.push('/')
          this.$swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto creado',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(response);
        });
    },
  },
}
</script>
  
<style>
.login {
  margin-top: 90px;
  margin-bottom: 90px;
}

</style>