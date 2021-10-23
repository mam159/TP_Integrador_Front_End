let calcular = document.getElementById('calculate');
let clear = document.getElementById('clear');

function resume() {
    let cantidad =  document.getElementById("cant").value;
    let cate = document.getElementById("catego");
    let categorias = cate.options[cate.selectedIndex].text;
    let valor=0;
    let pre = 200;

    if (isNaN(parseInt(cantidad)) || parseInt(cantidad) <= 0 ){
        document.getElementById("result").innerHTML="<div class='alert alert-danger'role='alert' id='result'>Debe ingresar una cantidad mayor a 0 </div>";
    } else {
        switch (categorias) {
            case "Estudiante":
                valor= cantidad * pre * 0.2;
                document.getElementById("result").innerHTML="<div class='alert alert-primary'role='alert' id='result'>Total a Pagar: $"+valor+"</div>";
                break;
            case "Trainee":
                valor = cantidad * pre * 0.5; 
                document.getElementById("result").innerHTML="<div class='alert alert-primary'role='alert' id='result'>Total a Pagar: $"+valor+"</div>";
                break;
            case "Junior":
                valor = cantidad * pre * 0.85; 
                document.getElementById("result").innerHTML="<div class='alert alert-primary'role='alert' id='result'>Total a Pagar: $"+valor+"</div>";
                break;
            case "Seleccionar":
                document.getElementById("result").innerHTML="<div class='alert alert-danger'role='alert' id='result'>Debe seleccionar una categoria valida </div>";
                break;
            default:
                break;
        }
    }
}

function limpia() {
    document.getElementById("cant").value="";
    document.getElementById("catego").value="1";
    document.getElementById("result").innerHTML="";
}

calcular.addEventListener('click', resume);
clear.addEventListener('click',limpia)