const form=document.getElementById("formContact");
const estado=document.getElementById("estadoForm");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {"Accept": "application/json"}
    });

    if(response.ok){
        estado.textContent="Mensaje enviado correctamente";
        estado.style.color="green";
        form.reset();
    }
    else{
        estado.textContent="Error al enviar";
        estado.style.color="red"; 
    }

});