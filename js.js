function enviarWpp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const telefone = "5571983466997";

  const textoCompleto = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;

  const mensagemFormatada = encodeURIComponent(textoCompleto);

  const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

  window.open(url, "_blank");
}
