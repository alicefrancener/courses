var titulo = document.querySelector('.titulo');
titulo.textContent = 'Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector('.info-peso').textContent;
    var altura = pacientes[i].querySelector('.info-altura').textContent;
    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        pacientes[i].querySelector('.info-peso').textContent = 'Peso Inválido';
    }

    if (alta <= 0 || altura >= 3.0) {
        alturaEhValida = false;
        pacientes[i].querySelector('.info-altura').textContent = 'Peso Inválido';
    }

    if (pesoEhValido && alturaEhValida) {
        pacientes[i].querySelector('.info-imc').textContent = 'Dados inválidos';
    }

    var imc = peso / (altura * altura);
    pacientes[i].querySelector('.info-imc').textContent = imc.toFixed(2);
}