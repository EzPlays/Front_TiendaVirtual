<template>
  <div>

    <Navbar />

    <div class="container card login w-50">
      <div class="card-header text-center">Formulario de Registro</div>
      <div class="card-body">
        <form class="" @submit.prevent="Registrar()">
          <div class="mb-4 col-auto">
            <label for="nombre_completo" class="form-label">Nombre completo</label>
            <input v-model="formP.nombre_completo" required type="text" class="form-control" id="nombre_completo"
              autocomplete="off">
          </div>
          <div class="mb-4 col-auto">
            <label for="correo" class="form-label">Correo</label>
            <input :class="{ error: validaEmail() }" v-model="formP.correo" required type="email" class="form-control"
              id="correo" autocomplete="off" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Correo valido ejemplo: example@gmail.co, example@gmail.com</div>
          </div>
          <div class="mb-4 ">
            <label for="clave" class="form-label">Contraseña</label>
            <div class="d-flex">
              <input :class="{ error: validaPassword() }" v-model="formP.clave" required type="password"
                class="form-control flex-fill" id="clave" autocomplete="off">
              <div class="input-group-append">
                <button id="show_password" class="btn btn-secondary flex-fill" type="button" title="mostrar contraseña" 
                  @click="mostrarContrasena()"> <i class="fa-solid fa-eye-slash"></i> </button>
              </div>
            </div>
            <div class="form-text">Contraseña segura 1 mayuscula, 1 minuscula, 1 numero</div>
          </div>
          <div class="d-grid gap-2 mx-auto col-4">
            <button type="submit" class="btn btn-secondary mb-3">
              Regristrar
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
import { usuariosGetAndPost } from "../views/rutas.js";
export default {
  name: "RegistroView",

  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      formP: {
        nombre_completo: "",
        correo: "",
        clave: "",
      },
    };
  },

  mounted() {
    if (localStorage.token != null) {
      this.$router.push("/");
    } else {
      
    }
  },

  methods: {
    mostrarContrasena() {
      var cambio = document.getElementById("clave");
      if (cambio.type == "password") {
        cambio.type = "text";
      } else {
        cambio.type = "password";
      }
    },
    validaEmail() {
      var exp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (exp.test(this.formP.correo)) {
        return false;
      } else {
        return true;
      }
    },
    validaPassword() {
      var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
      if (exp.test(this.formP.clave)) {
        return false;
      } else {
        return true;
      }
    },
    Registrar() {
      if (this.validaEmail() === false && this.validaPassword() === false) {
        let headers = {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.token,
          },
        };
        axios
          .post(
            usuariosGetAndPost,
            this.formP,
            {
              validateStatus: function (status) {
                return status < 500; // Resuelve solo si el código de estado es menor que 500
              },
            },
            headers
          )
          .then((response) => {
            this.$router.push('/login')
            this.$swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registro Exitoso ¡Bienvenido!',
              showConfirmButton: false,
              timer: 1500
            })
            console.log(response);
          });
      } else {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'tu correo o contraseña no son validos',
        })
      }
    },
  },
}
</script>
  
<style>
.login {
  margin-top: 90px;
  margin-bottom: 90px;
}

input.error {
  border-bottom: 3px solid red;
}
</style>