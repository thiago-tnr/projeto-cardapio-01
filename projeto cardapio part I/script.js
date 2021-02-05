/* um número no formato internacional (ativo no WhatsApp)
var number = 5531998082198;
// o texto ou algo vindo de um <textarea> ou <input> por exemplo
var msg = 'Um texto qualquer';

// montar o link (apenas texto) (web)
let target = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;

// montar o link (número e texto) (web)
let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(5531994543303)}&text=${encodeURIComponent()}`;

// montar o link (texto) (app)
let target = `whatsapp://send?text=${encodeURIComponent(msg)}`

// montar o link (número e texto) (app)
let target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(msg)}`;

/*function pedir (){
    window.location.href = "https://wa.me/5531998082198?text=I'm%20interested%20in%20your%20car%20for%20sale";
}

function pedir (){
    window.open = "https://wa.me/5531998082198?text=I'm%20interested%20in%20your%20car%20for%20sale";
}
function abreLink(){
    window.location="http://www.google.com.br";
}*/