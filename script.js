function loagindItens() {
  const message = document.querySelector("#message");
  const photo = document.querySelector("#image");
  const date = new Date();
  const hour = date.getHours();

  message.innerHTML = `now it's ${hour} o'clock`;
}

document.onload = loagindItens();
