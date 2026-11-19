// Insira aqui a URL HTTPS do checkout depois de cadastrar o produto.
const CHECKOUT_URL = "";
const comprar = document.getElementById("comprar");
const aviso = document.getElementById("checkout-notice");
if (CHECKOUT_URL.startsWith("https://")) {
  comprar.href = CHECKOUT_URL;
  comprar.textContent = "Quero minha planilha →";
  comprar.removeAttribute("aria-disabled");
  aviso.textContent = "Você será direcionado ao checkout seguro da plataforma de pagamento.";
} else {
  comprar.addEventListener("click", (event) => event.preventDefault());
}
