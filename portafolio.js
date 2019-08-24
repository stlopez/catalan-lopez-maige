var trabajos = [{
    figure: "media/eym1s_catalan-lopez-maige_2019.jpg",
    alt: "banca_terciado3mm",
    title: "Banca de terciado",
    about: "Banca de terciado de 3mm, de 1.20x0.3x0.4mts."
}, {
    figure: "media/boncina_lopez-maige-suarez-2018.jpg",
    alt: "bonciña",
    title: "Bonciña",
    about: "Producto alimenticio en base a gelatina de aga-agar, açai y leche condensada, en una galleta de granola, quinoa y coco."
}, {
    figure: "media/insectnativ-catalan-2019.jpg",
    alt: "insecta nativa",
    title: "Insecta Nativa",
    about: "Estampado en tela para serígrafia, 120x100cms."
}, {
    figure: "media/myp1s_bonnefoy-lobos-lopez-ramirez-saldivia_2017.jpg",
    alt: "Descripción de la imagen",
    title: "Mobiliario público",
    about: "Raulí y acero, instalado en Puente Pedro de Valdivia."
}, {
    figure: "media/alcatraz-maige-2017.jpg",
    alt: "alcatraz papel",
    title: "Abstracción Alcatraz",
    about: "Abstracción de un alcatraz en papel hilado 180."
}, {
    figure: "media/oma_lopez-maige-suarez-vallejos_2018.jpg",
    alt: "oma",
    title: "OMA",
    about: "Ortesis, esqueleto de cobre y recubrimiento de cobre."
}, {
    figure: "media/estoy_lopez_2019.JPG",
    alt: "estoy",
    title: "estoy?",
    about: "Acrílico sobre tela, 160x75cms."
}, {
    figure: "media/fiori_lopez_2017.jpg",
    alt: "Fiori",
    title: "Fiori",
    about: "Acuarela sobre papel, 45x21cms."
    
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
