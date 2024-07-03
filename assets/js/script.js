const articulo = {
    id:31,
    titulo: "Autos nuevos en Chile",
    subtitulo: "El mercado de autos se normaliza",
    descripcion:`No es verdad que los precios de los autos usados se han disparado debido a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin...`
}

const articulosSection = document.querySelector (".articulos")
articulosSection.innerHTML =/*html*/ `
<article class = "articulo">
<h4>${articulo.titulo}</h4>
<h6>${articulo.subtitulo}</h6>
<p>${articulo.descripcion}</p>
<a href = "/articulo/${articulo.id}"></a> <button>Ver más</button>
</article>
`
const producto = {
    id:43,
    titulo:"Cafetera magnética",
    precio:23990,
    color: "rojo",
    agotado: true,
    src:"assets/img/cafetera.jpg",
    descripcion:`calienta tu café matutino con la nueva teconología magnética`
}
const articulo2Section = document.querySelector(".articulos2")
articulo2Section.innerHTML =/*html*/`
<article class = "articulo2">
<img src="${producto.src}">
<h2>${producto.titulo}</h2>
<h3>${producto.precio}</h3>
<p>${producto.descripcion}</p>
<p>Color: <span class="indicador ${producto.color}"></span></p>
<p class="agotado ${producto.agotado ? 'mostrar':''}">Agotado</p>
<a href = "/producto/${producto.id}"></a><button>Ver más</button>
</article>
`
