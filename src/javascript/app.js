document.addEventListener('DOMContentLoaded',function(){
    cargarProyectos();
});


//HAY UN ERROR DE QUE ME PONE TODO EN EL MISMO LI
//NO PUEDO PONER ICONOS
//NO PUEDO PONER LINKS

async function cargarProyectos(){

    try {
        const resultado = await fetch ('./proyectos.json');
        const db = await resultado.json();

        const { proyectos } = db;

        //creo el expositorio proyectos

        const expositorio_proyectos = document.createElement('DIV');
        expositorio_proyectos.classList.add('expositorio-proyectos');
        const expositorio_nuevo = document.querySelector('.expositorio_nuevo');
        expositorio_nuevo.appendChild(expositorio_proyectos);



        proyectos.forEach( proyecto => {

            const { imagen , titulo, descripcion, link, galeria} = proyecto

            //CREO EL DIV DE LOS PROYECTOS
            const div_proyecto = document.createElement('DIV');
            div_proyecto.classList.add('proyecto');
            document.querySelector('.expositorio-proyectos').appendChild(div_proyecto);

            //crear el div que contendra la imagen <-proyecto

            const div_proyecto_imagen = document.createElement('DIV');
            div_proyecto_imagen.classList.add('proyecto-imagen');
            //le pongo la clase de la imagen correspondiente
            div_proyecto_imagen.classList.add(imagen);
            //pongo el div con la imagen dentro de el div proyecto
            div_proyecto.appendChild(div_proyecto_imagen);

            //crear el div del cartel   <-imagen <-proyecto

            const div_proyecto_cartel = document.createElement('DIV');
            div_proyecto_cartel.classList.add('proyecto-cartel');
            div_proyecto_cartel.textContent = ' Vista Previa ';

            //crear el icono
            const div_proyecto_cartel_ojo = document.createElement('I');
            div_proyecto_cartel_ojo.classList.add("far");
            div_proyecto_cartel_ojo.classList.add("fa-eye");
            div_proyecto_cartel.appendChild(div_proyecto_cartel_ojo);
            div_proyecto_imagen.appendChild(div_proyecto_cartel);

            //crear la funcion galeria de la imagen

            div_proyecto_imagen.onclick = function(){

                llamargaleria();

                const over = document.querySelector('.overlay');
                const over_galeria = document.createElement('DIV');
                over_galeria.classList.add('overlay-galeria');
                over.appendChild(over_galeria);

                galeria.forEach( gal => {
                    console.log('hola');
                     const overlay_imagen = document.createElement('IMG');
                     overlay_imagen.src= gal;
                     over_galeria.appendChild(overlay_imagen);
                 })
            }

            //crar el div informacion <- proyecto

            const div_proyecto_informacion = document.createElement('DIV');
            div_proyecto_informacion.classList.add('proyecto-informacion');
            div_proyecto.appendChild(div_proyecto_informacion);

            //crear el titulo

            const proyecto_titulo = document.createElement('H4');
            proyecto_titulo.classList.add('proyecto-titulo');
            proyecto_titulo.textContent = titulo;
            div_proyecto_informacion.appendChild(proyecto_titulo);

            //crear el texto

            const proyecto_descripcion = document.createElement('P');
            proyecto_descripcion.textContent = descripcion;
            div_proyecto_informacion.appendChild(proyecto_descripcion);

            //crear el boton
        
            const proyecto_boton = document.createElement('DIV');
            proyecto_boton.classList.add('boton-link');
            const ir = document.createElement('P');
            ir.textContent = "Ir al sitio web";
            proyecto_boton.appendChild(ir);
            div_proyecto_informacion.appendChild(proyecto_boton);

            //crear el icono del boton

            const proyecto_boton_icono = document.createElement('I');
            proyecto_boton_icono.classList.add("fas");
            proyecto_boton_icono.classList.add("fa-external-link-alt");
            proyecto_boton.appendChild(proyecto_boton_icono);

            //crear funcion boton

            proyecto_boton.onclick = function(){
                location.href= link, '_blank';
            }


        });

    } catch (error) {
        console.log(error);
    }
    
}

function llamargaleria(){
    
    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }



    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}