const body = document.querySelector("body")

function backcolor() {
  const width = window.innerWidth

  if(width <= "500") {
    body.className = "small"
  } else if(width > "500" && width <= "800") {
    body.className = "medium"
  } else {
    body.className = "large"
  }
}

window.addEventListener("resize", backcolor)