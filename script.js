// =========================
// FORMULÁRIO
// =========================

const form = document.getElementById("lead-form");

const telefone = document.getElementById("telefone");

const email = document.getElementById("email");

const valorInput =
document.getElementById("valor");

const successMessage =
document.getElementById("success-message");

// =========================
// MÁSCARA TELEFONE
// =========================

telefone.addEventListener("input", () => {

let valor = telefone.value;

// Remove tudo que não for número
valor = valor.replace(/\D/g, "");

// Limita em 11 números
valor = valor.substring(0, 11);

// Formatação
valor = valor.replace(
/^(\d{2})(\d)/g,
"($1) $2"
);

valor = valor.replace(
/(\d{5})(\d)/,
"$1-$2"
);

telefone.value = valor;

});

// =========================
// MÁSCARA VALOR
// =========================

valorInput.addEventListener("input", () => {

let valor =
valorInput.value.replace(/\D/g, "");

valor =
(valor / 100).toFixed(2) + "";

valor =
valor.replace(".", ",");

valor =
valor.replace(
/\B(?=(\d{3})+(?!\d))/g,
"."
);

valorInput.value =
"R$ " + valor;

});

// =========================
// VALIDAÇÃO FORMULÁRIO
// =========================

form.addEventListener("submit", (event) => {

const telefoneLimpo =
telefone.value.replace(/\D/g, "");

const emailValido =
/^[^\s@]+@[^\s@]+.[^\s@]+$/
.test(email.value);

// VALIDA TELEFONE
if (telefoneLimpo.length < 11) {


event.preventDefault();

alert(
  "Digite um telefone válido com DDD."
);

telefone.focus();

return;


}

// VALIDA EMAIL
if (!emailValido) {


event.preventDefault();

alert(
  "Digite um e-mail válido."
);

email.focus();

return;


}

// MENSAGEM SUCESSO
successMessage.textContent =
"Solicitação enviada com sucesso!";

});

// =========================
// CONTADORES ANIMADOS
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter) => {

const updateCounter = () => {


const target =
  +counter.getAttribute("data-target");

const current =
  +counter.innerText;

const increment =
  Math.ceil(target / 100);

if (current < target) {

  counter.innerText =
    current + increment;

  setTimeout(updateCounter, 30);

} else {

  counter.innerText = target;

}


};

updateCounter();

});

// OBSERVER
const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {


if (entry.isIntersecting) {

  const counter =
    entry.target;

  const updateCounter = () => {

    const target =
      +counter.getAttribute("data-target");

    const current =
      +counter.innerText;

    const increment =
      Math.ceil(target / 100);

    if (current < target) {

      counter.innerText =
        current + increment;

      setTimeout(updateCounter, 15);

    } else {

      counter.innerText =
        target;

    }

  };

  updateCounter();

  // Para não repetir animação
  observer.unobserve(counter);

}

});

});

// OBSERVAR TODOS CONTADORES
counters.forEach((counter) => {

observer.observe(counter);

});
