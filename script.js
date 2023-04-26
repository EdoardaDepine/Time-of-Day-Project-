function loagindItens() {
  const message = document.querySelector("#message");
  const image = document.querySelector("#image");
  const date = new Date();
  const currentTime = date.getHours();

  message.innerHTML = `Now it's ${currentTime} o'clock!`;

  if (currentTime >= 18 || currentTime < 5) {
    image.src = "noite.jpg";
  } else if (currentTime >= 5 && currentTime < 12) {
    image.src = "manha.jpg";
  } else {
    image.src = "tarde.jpg";
  }
}

document.onload = loagindItens();
