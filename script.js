// Cole a URL HTTPS de produção fornecida pela plataforma de pagamento.
const CHECKOUT_URL = "https://pay.cakto.com.br/vwkk4hc_1323312";

function ativarCompra(valor) {
  if (!valor.trim()) return;

  let url;

  try {
    url = new URL(valor);
  } catch {
    return;
  }

  if (url.protocol !== "https:" || url.username || url.password) return;

  const botao = document.getElementById("comprar");
  const link = document.createElement("a");
  link.id = botao.id;
  link.className = botao.className;
  link.href = url.href;
  link.dataset.cta = "oferta_checkout";
  link.dataset.event = "begin_checkout";
  link.textContent = "Quero minha planilha";
  botao.replaceWith(link);
}

ativarCompra(CHECKOUT_URL);

const video = document.getElementById("demo-video");

video.addEventListener("error", () => {
  video.remove();
  document.getElementById("demo-cover").hidden = false;
  document.getElementById("demo-caption").textContent =
    "Vídeo indisponível. Imagem ilustrativa do produto.";
}, { once: true });
