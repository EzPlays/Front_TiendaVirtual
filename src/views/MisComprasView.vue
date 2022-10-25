<template>
  <main>
    <Navbar />

    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="compra in displayedArticles" :key="compra.id">
          <div class="card mb-2 box-shadow post-cards">
            <!-- <img v-bind:src="" class="card-img-top"> -->
            <div class="card-body">
              <h5 class="capitalize">{{ compra.nombre }}</h5>
              <p class="card-text">{{ compra.descripcion }}...</p>
              <h6 class="capitalize">cantidad {{ compra.cantidad }}</h6>
              <h6 class="capitalize">COP {{ compra.total }}</h6>
              <h3 class="capitalize">{{ compra.estado }}</h3>
              <br>
              <form class="" @submit.prevent="Eliminar(compra.id)">
                <button type="submit" class="btn btn-danger mb-3">
                  Eliminar de mis compras
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="btn-group col-md-2 offset-md-5">
          <button @click="page--" v-if="page != 1" type="button" class="btn btn-sm btn-outline-secondary">
            Antes
          </button>
          <button @click="page = pageNumber" v-for="pageNumber in pages.slice(page - 1, page + 6)" :key="pageNumber"
            type="button" class="btn  btn-sm btn-outline-secondary">
            {{ pageNumber }}
          </button>
          <button @click="page++" v-if="page < pages.length" type="button" class="btn  btn-sm btn-outline-secondary">
            Siguiente
          </button>
        </div>
      </div>
    </div>

    <h1 class="text-white text-center" v-if="compras.length === 0">El historial esta vacío</h1>

    <Footer />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { comprasGetAndDelete } from "../views/rutas.js";
export default {
  name: "MisComprasView",

  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      compras: [],
      page: 1,
      perPage: 12,
      pages: [],
      token: localStorage.token,
      id: localStorage.id,
    };
  },

  mounted() {
    if (localStorage.token != null) {
      this.Compras();
    } else {
      this.$router.push("/login");
    }
  },


  methods: {
    Borrar(id) {
      axios
        .delete(comprasGetAndDelete + id)
        .then((response) => {
          this.status = response.data.status;
          this.$router.go();
          console.log(response);
        });
    },
    Eliminar(id) {
      this.$swal.fire({
        title: '¿Está Seguro Que Desea Eliminar?',
        text: "!No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Seguro!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.Borrar(id)
        }
      })
    },
    Compras() {
      axios
        .get(comprasGetAndDelete + this.id)
        .then((rows) => {
          this.compras = rows.data;
          console.log(this.compras);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Paginate(productos) {
      let page = this.page
      let perPage = this.perPage
      let from = (page * perPage) - perPage;
      let to = (page * perPage)
      return productos.slice(from, to)
    },
    setArticles() {
      let numberofpages = Math.ceil(this.compras.length / this.perPage)
      for (let i = 1; i < numberofpages; i++) {
        this.pages.push(i)
      }
    }
  },
  computed: {
    displayedArticles() {
      return this.Paginate(this.compras)
    }
  },
  watch: {
    productos() {
      this.setArticles()
    }
  },

}
</script>

<style scoped>

</style>



