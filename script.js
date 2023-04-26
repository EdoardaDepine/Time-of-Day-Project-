function loagindItens() {
  const message = document.querySelector("#message");
  const image = document.querySelector("#image");
  const date = new Date();
  const currentTime = date.getHours();

  message.innerHTML = `Now it's ${currentTime} o'clock!`;

  if (currentTime >= 18 || currentTime < 5) {
    image.src = "noite.jpg";
    document.body.style.background = "rgb(29, 29, 112);";
  } else if (currentTime >= 5 && currentTime < 12) {
    image.src = "manha.jpg";
    document.body.style.background = "rgb(196, 163, 54)";
  } else {
    image.src = "tarde.jpg";
    document.body.style.background = "rgb(101, 80, 10)";
  }
}

document.onload = loagindItens();
