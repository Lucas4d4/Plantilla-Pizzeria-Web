/*

<div class="divMenuIntern">
        <img src="Contenido/muzarella.png" alt="Pizza Muzarella">
        <h3>Pizza Muzzarella</h3> 
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">10 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$15000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/napolitana.png" alt="Pizza Napolitana">
        <h3>Pizza Napolitana</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">15 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$17000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/papaspay.png" alt="Pizza PapasPay">
        <h3>Pizza con papaspay</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">11 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$16000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/roquefort.png" alt="Pizza Roquefort">
        <h3>Pizza Roquefort</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">18 minutos</td>
            </tr>
        </table>
        <table>
            <tr> 
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$20000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/calabresa.png" alt="Pizza Calabresa">
        <h3>Pizza Muzzarella</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">20 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$25000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/jamonMorron.png" alt="Pizza de Jamon y Morron">
        <h3>Pizza Napolitana</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">12 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$15000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>
    <div class="divMenuIntern">
        <img src="Contenido/salchichas.png" alt="Pizza salchichas">
        <h3>Pizza con Salchichas</h3>
        <table>
            <tr>
                <td style="font-weight: bold;">Duración:&nbsp;</td>
                <td><img src="Contenido/duracion.png" id="imagenHora"></td>
                <td class="tdTime">12 minutos</td>
            </tr>
        </table>
        <table>
            <tr>
                <td style="font-weight: bold;">Precio:&nbsp;</td>
                <td>$17000</td>
            </tr>
        </table>
        <button><img src="Contenido/whatsapp.png"><span>Encargar pedido</span></button>
    </div>

*/



const menuDatos=[
    {imagen:"Contenido/muzarella.png", titulo:"Pizza Muzzarella", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"10 minutos", precioTitulo:"Precio: ",
        precio:"15000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/napolitana.png", titulo:"Pizza Napolitana", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"15 minutos", precioTitulo:"Precio: ",
        precio:"17000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/papaspay.png", titulo:"Pizza papas pay", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"11 minutos", precioTitulo:"Precio: ",
        precio:"16000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/roquefort.png", titulo:"Pizza roquefort", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"18 minutos", precioTitulo:"Precio: ",
        precio:"20000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/calabresa.png", titulo:"Pizza calabresa", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"20 minutos", precioTitulo:"Precio: ",
        precio:"25000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/jamonMorron.png", titulo:"Pizza jamon y morron", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"12 minutos", precioTitulo:"Precio: ",
        precio:"15000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/salchichas.png", titulo:"Pizza salchichas", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"12 minutos", precioTitulo:"Precio: ",
        precio:"17000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    },
    {imagen:"Contenido/sardinas.jpg", titulo:"Pizza sardinas", duracionTitulo:"Duracion: ",
        duracionImage:"Contenido/duracion.png", duracion:"13 minutos", precioTitulo:"Precio: ",
        precio:"21000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    }
];


var filasporPagina=2;
var totalPaginas=2;
var paginaActual=1;
// PASAR DICHO CODIGO DE PAGINACIÓN AL PROYECTO WEB DE PIZZERIA
    var datosGeneral=menuDatos;
    var divGeneral=document.getElementById("divMenuGeneral");
    var contador=0;
    var divPagina=document.getElementById("divPagina");
    var contadorRepe=0;

    datosGeneral.forEach(datose=>{
        contador=contador+1;
        
        if(contador%4<4){
            contadorRepe=contadorRepe+1;
            if(contadorRepe%4==0){
            contadorRepe=0;
            }
            if(contadorRepe==1){
                var botonPagina=document.createElement("button");
        botonPagina.textContent=(((contador/4)+1)-0.25);
        botonPagina.addEventListener("click", function(event){
            var datosTotal=menuDatos;
            var contadorExtra=0;
            var divGeneral=document.getElementById("divMenuGeneral");
            var valorBoton=event.target.textContent;

            limpiarDatos();
        datosTotal.forEach(datose=>{
            contadorExtra=contadorExtra+1;
            if(valorBoton==1){
                if(contadorExtra<=4){
                    var divInterno=document.createElement("div");
                    divInterno.className="divMenuIntern";
/*
{imagen:"Contenido/muzarella.png", titulo:"Pizza Muzzarella", duracionTitulo:"Duracion:&nbsp;",
duracionImage:"Contenido/duracion.png", duracion:"10 minutos", precioTitulo:"Precio:&nbsp;",
precio:"15000", buttonWhatsAppImage:"Contenido/whatsapp.png", buttonDescript:"Encargar Pedido"
    }
*/

                    var imagen = document.createElement("img");
                    var tituloPizza=document.createElement("h3");
                    var tableDescript=document.createElement("table");
                    var trDescript=document.createElement("tr");
                    var tdDescript=document.createElement("td");
                    var tdDescript2=document.createElement("td");
                    var tdDescript3=document.createElement("td");
                    var imageDescript=document.createElement("img");

                    var tablePrice=document.createElement("table");
                    var trPrice=document.createElement("tr");
                    var tdPrice=document.createElement("td");
                    var tdPrice2=document.createElement("td");

                    imagen.src=datose.imagen;
                    tituloPizza.textContent=datose.titulo;
                    imageDescript.src=datose.duracionImage;
                    imageDescript.setAttribute("id","imagenHora");
                    tdDescript.textContent=datose.duracionTitulo;
                    tdDescript2.appendChild(imageDescript);
                    tdDescript3.textContent=datose.duracion;
                    trDescript.appendChild(tdDescript);
                    trDescript.appendChild(tdDescript2);
                    trDescript.appendChild(tdDescript3);
                    tableDescript.appendChild(trDescript);

                    tdPrice.textContent=datose.precioTitulo;
                    tdPrice.style.fontWeight="bold";
                    tdPrice2.textContent=datose.precio;
                    trPrice.appendChild(tdPrice);
                    trPrice.appendChild(tdPrice2);
                    tablePrice.appendChild(trPrice);

                    var botonWhatsApp=document.createElement("button");
                    var detalleBoton=document.createElement("span");
                    var imgbotonWhatsApp=document.createElement("img");
                    detalleBoton.textContent="Encargar Pedido";
                    imgbotonWhatsApp.src="Contenido/whatsapp.png";
                    botonWhatsApp.appendChild(imgbotonWhatsApp);
                    botonWhatsApp.appendChild(detalleBoton);

                    divInterno.appendChild(imagen);
                    divInterno.appendChild(tituloPizza);
                    divInterno.appendChild(tableDescript);
                    divInterno.appendChild(tablePrice);
                    divInterno.appendChild(botonWhatsApp);
                    divGeneral.appendChild(divInterno);
                }
                
            }
            else{
                if(valorBoton>=2){
                    if(contadorExtra>((valorBoton*4)-4)&&contadorExtra<=(valorBoton*4)){
                        var divInterno=document.createElement("div");
                    divInterno.className="divMenuIntern";
                        var imagen = document.createElement("img");
                    var tituloPizza=document.createElement("h3");
                    var tableDescript=document.createElement("table");
                    var trDescript=document.createElement("tr");
                    var tdDescript=document.createElement("td");
                    var tdDescript2=document.createElement("td");
                    var tdDescript3=document.createElement("td");
                    var imageDescript=document.createElement("img");

                    var tablePrice=document.createElement("table");
                    var trPrice=document.createElement("tr");
                    var tdPrice=document.createElement("td");
                    var tdPrice2=document.createElement("td");

                    imagen.src=datose.imagen;
                    tituloPizza.textContent=datose.titulo;
                    imageDescript.src=datose.duracionImage;
                    imageDescript.setAttribute("id","imagenHora");
                    tdDescript.textContent=datose.duracionTitulo;
                    tdDescript2.appendChild(imageDescript);
                    tdDescript3.textContent=datose.duracion;
                    trDescript.appendChild(tdDescript);
                    trDescript.appendChild(tdDescript2);
                    trDescript.appendChild(tdDescript3);
                    tableDescript.appendChild(trDescript);

                    tdPrice.textContent=datose.precioTitulo;
                    tdPrice.style.fontWeight="bold";
                    tdPrice2.textContent=datose.precio;
                    trPrice.appendChild(tdPrice);
                    trPrice.appendChild(tdPrice2);
                    tablePrice.appendChild(trPrice);

                    var botonWhatsApp=document.createElement("button");
                    var detalleBoton=document.createElement("span");
                    var imgbotonWhatsApp=document.createElement("img");
                    detalleBoton.textContent="Encargar Pedido";
                    imgbotonWhatsApp.src="Contenido/whatsapp.png";
                    botonWhatsApp.appendChild(imgbotonWhatsApp);
                    botonWhatsApp.appendChild(detalleBoton);

                    divInterno.appendChild(imagen);
                    divInterno.appendChild(tituloPizza);
                    divInterno.appendChild(tableDescript);
                    divInterno.appendChild(tablePrice);
                    divInterno.appendChild(botonWhatsApp);
                    divGeneral.appendChild(divInterno);
                    }
                }
            }
        });

        });
        divPagina.appendChild(botonPagina);
            }
        
        }

        if(contador<=4){
            var divInterno=document.createElement("div");
                    divInterno.className="divMenuIntern";
            var imagen = document.createElement("img");
                    var tituloPizza=document.createElement("h3");
                    var tableDescript=document.createElement("table");
                    var trDescript=document.createElement("tr");
                    var tdDescript=document.createElement("td");
                    var tdDescript2=document.createElement("td");
                    var tdDescript3=document.createElement("td");
                    var imageDescript=document.createElement("img");

                    var tablePrice=document.createElement("table");
                    var trPrice=document.createElement("tr");
                    var tdPrice=document.createElement("td");
                    var tdPrice2=document.createElement("td");

                    imagen.src=datose.imagen;
                    tituloPizza.textContent=datose.titulo;
                    imageDescript.src=datose.duracionImage;
                    imageDescript.setAttribute("id","imagenHora");
                    tdDescript.textContent=datose.duracionTitulo;
                    tdDescript2.appendChild(imageDescript);
                    tdDescript3.textContent=datose.duracion;
                    trDescript.appendChild(tdDescript);
                    trDescript.appendChild(tdDescript2);
                    trDescript.appendChild(tdDescript3);
                    tableDescript.appendChild(trDescript);

                    tdPrice.textContent=datose.precioTitulo;
                    tdPrice.style.fontWeight="bold";
                    tdPrice2.textContent=datose.precio;
                    trPrice.appendChild(tdPrice);
                    trPrice.appendChild(tdPrice2);
                    tablePrice.appendChild(trPrice);

                    var botonWhatsApp=document.createElement("button");
                    var detalleBoton=document.createElement("span");
                    var imgbotonWhatsApp=document.createElement("img");
                    detalleBoton.textContent="Encargar Pedido";
                    imgbotonWhatsApp.src="Contenido/whatsapp.png";
                    botonWhatsApp.appendChild(imgbotonWhatsApp);
                    botonWhatsApp.appendChild(detalleBoton);

                    divInterno.appendChild(imagen);
                    divInterno.appendChild(tituloPizza);
                    divInterno.appendChild(tableDescript);
                    divInterno.appendChild(tablePrice);
                    divInterno.appendChild(botonWhatsApp);
                    divGeneral.appendChild(divInterno);
        }
        
    }
    );

    



    function cargarDatos(){
        
    }

    //  MAÑANA CAMBIAR LAS DESCRIPCIONES DE LOS DATOS


    function limpiarDatos(){
        var divGeneral = document.getElementById("divMenuGeneral");
        divGeneral.innerHTML="";
    }