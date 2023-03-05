$('.sobe').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'), 
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000)
    
})

var cont2 = 0;
$('#btn-menu').click(function(e){
    if(cont2 % 2 == 0){
        
        $('.menu-escondido').css("transform", "scaleY(1)");
    }else{

        $('.menu-escondido').css("transform", "scaleY(0)");
    }
    cont2++; 
})

function animar(){
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle('ativar');
}