var trabajos = [{
    figure: "media/eym1s_catalan-lopez-maige_2019.jpg",
    alt: "banca_terciado3mm",
    title: "Banca de terciado",
    about: "Banca de terciado de 3 milímetros, de 1.20x0.3x0.4 mts."
}, {
    figure: "media/boncina_lopez-maige-suarez-2018.jpg",
    alt: "Bonciña",
    title: "Bonciña",
    about: "Producto alimenticio en base a gelatina de aga-agar, açai y leche condensada, en una galleta de granola, quinoa y coco."
}, {
    figure: "insectnativ-catalan-2019.jpg",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Estampado en tela"
}, {
    figure: "media/trabajo-04-editorial.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/trabajo-05-artesania.jpg",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-textil.jpg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
