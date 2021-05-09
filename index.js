 
 var painelHora = document.getElementById('hora');


 setInterval(() => {
     var data =  new Date();
     var hora = data.getHours() + ':' + data.getMinutes() +':'+ data.getSeconds();
     painelHora.textContent = hora;
 }, 1000);