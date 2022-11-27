function menuMobile() {
    if($("#hambuguer").hasClass("ativado")) {
        $("#hambuguer").removeClass("ativado");
        $("body").removeClass('mobile');
        $("#hambuguer").removeClass('fa-times').addClass('fa-bars');
    } else {
        $("#hambuguer").addClass("ativado");
        $("body").addClass('mobile');
        $("#hambuguer").removeClass('fa-bars').addClass('fa-times');
    }
}

function exibirGaleria(galeria) {
    for (var i = 0; i < galeria.length; i++) {
        var html = '';
        html += '<article>';
        html += '<img src="'+ galeria[i].imagem + (i+1) +'.jpg" alt="'+ galeria[i].titulo +'">';
        html += '<h4>'+ galeria[i].titulo + '</h4>';
        html += '</article>';
        $('#galerias').append(html);
    }
}

function enviado() {
    alert("Formulário enviado com sucesso!");
}

$(document).ready(function(){
    $("#hambuguer").click(function(){
        menuMobile();
    });

    $("li").click(function(){
        if($("#hambuguer").hasClass("ativado")) {
            menuMobile();
        }
    });
    
    var galeria = [
        {
            titulo: 'Montanhas Zhangjiajie, China',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Monte Everest, Nepal - Tibete',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Montanhas Atlas, Marrocos',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Pico dos Pireneus - França',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Monte Fuji - Japão',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Cerro Torre - Argentina/Chile',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Monte Roraima - Brasil',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Monte Branco - Itália',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Monte Olimpo - Grécia',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Kirkjufell - Islândia',
            imagem: '../img/montanha'
        },
        {
            titulo: 'K2 - Paquistão',
            imagem: '../img/montanha'
        },
        {
            titulo: 'Alpes Suiços - Suiça',
            imagem: '../img/montanha'
        },
    ];
    exibirGaleria(galeria);
    
});