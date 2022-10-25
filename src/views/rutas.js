/* rutas api local*/
const baseurl = "http://localhost:5001"

//rutas usuario
const usuariosGetAndPost = "http://localhost:5001/usuarios"
const usuariosDeleteAndPut = "http://localhost:5001/usuarios/"
const usuario_login = "http://localhost:5001/usuarios/login"

//rutas productos
const productosGetAndPost = "http://localhost:5001/productos"
const productosDeleteAndPut = "http://localhost:5001/productos/"

//rutas carrito
const carritoGetAndPost = "http://localhost:5001/carrito"
const carritoGet = "http://localhost:5001/carrito/"
const carritoDelete = "http://localhost:5001/carrito/"

//rutas mis_compras
const comprasGetAndPost = "http://localhost:5001/compras"
const comprasGetAndDelete = "http://localhost:5001/compras/"

// /* rutas api host*/
// const baseurl = "https://apitiendavirtual-production.up.railway.app"

// //rutas usuario
// const usuariosGetAndPost = "https://apitiendavirtual-production.up.railway.app/usuarios"
// const usuariosDeleteAndPut = "https://apitiendavirtual-production.up.railway.app/usuarios/"
// const usuario_login = "https://apitiendavirtual-production.up.railway.app/usuarios/login"

// //rutas productos
// const productosGetAndPost = "https://apitiendavirtual-production.up.railway.app/productos"
// const productosDeleteAndPut = "https://apitiendavirtual-production.up.railway.app/productos/"

// //rutas carrito
// const carritoGetAndPost = "https://apitiendavirtual-production.up.railway.app/carrito"
// const carritoGet = "https://apitiendavirtual-production.up.railway.app/carrito/"
// const carritoDelete = "https://apitiendavirtual-production.up.railway.app/carrito/"

// //rutas mis_compras
// const comprasGetAndPost = "https://apitiendavirtual-production.up.railway.app/compras"
// const comprasGetAndDelete = "https://apitiendavirtual-production.up.railway.app/compras/"

//rutas exportadas
export default baseurl
export {
    usuario_login, 
    usuariosGetAndPost,
    usuariosDeleteAndPut,
    productosGetAndPost,
    productosDeleteAndPut,
    carritoGetAndPost,
    carritoGet,
    carritoDelete,
    comprasGetAndPost,
    comprasGetAndDelete
}
