var trabajos = [{
    figure: "media/eym1s_catalan-lopez-maige_2019.jpg",
    alt: "banca_terciado3mm",
    title: "Banca de terciado",
    about: "Banca de terciado de 3mm, de 1.20x0.3x0.4mts.",
    url: "https://www.instagram.com/p/B1h1k3zhEVz/?igshid=1598w6k10ruq2"
}, {
    figure: "media/boncina_lopez-maige-suarez-2018.jpg",
    alt: "bonciña",
    title: "Bonciña",
    about: "Producto alimenticio en base a gelatina de aga-agar, açai y leche condensada, en una galleta de granola, quinoa y coco.",
    url: "https://www.instagram.com/p/B1jozEsBOQp/?igshid=1lzebvw38ljve"
}, {
    figure: "media/insectnativ-catalan-2019.jpg",
    alt: "insecta nativa",
    title: "Insecta Nativa",
    about: "Estampado en tela para serígrafia, 120x100cms.",
    url: "https://www.instagram.com/p/B1jwrLCBRRs/?igshid=c2mbq2ib8ucv"
}, {
    figure: "media/myp1s_bonnefoy-lobos-lopez-ramirez-saldivia_2017.jpg",
    alt: "Descripción de la imagen",
    title: "Mobiliario público",
    about: "Raulí y acero, instalado en Puente Pedro de Valdivia.",
    url: "https://www.instagram.com/p/B1kCpaOheq_/"
}, {
    figure: "media/alcatraz-maige-2017.jpg",
    alt: "alcatraz papel",
    title: "Abstracción Alcatraz",
    about: "Abstracción de un alcatraz en papel hilado 180.",
    url: "https://www.instagram.com/p/B1jwgZOheWc/?igshid=1e973ojtopspc"
}, {
    figure: "media/oma_lopez-maige-suarez-vallejos_2018.jpg",
    alt: "oma",
    title: "OMA",
    about: "Ortesis, esqueleto de cobre y recubrimiento textil.",
    url: "https://www.instagram.com/p/B1j-xBGhFb0/"
}, {
    figure: "media/estoy_lopez_2019.JPG",
    alt: "estoy",
    title: "estoy?",
    about: "Acrílico sobre tela, 160x75cms.",
    url: "https://www.instagram.com/p/B1j3yZ-BijT/?igshid=1l51r9gxk66ry"
}, {
    figure: "media/fiori_lopez_2017.jpg",
    alt: "Fiori",
    title: "Fiori",
    about: "Acuarela sobre papel, 45x21cms.",
    url: "https://www.instagram.com/p/B1j4HNThHQW/?igshid=kcd3hah1bvhw"
    
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '" >Ver más</a><p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
