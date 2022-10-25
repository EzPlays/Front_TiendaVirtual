/* rutas api */
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
