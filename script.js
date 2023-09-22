function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("img")
  if(html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Maria Eduarda sorrindo, usando blusa branca com estampa verde e fundo branco')
  }else{
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Maria Eduarda sorrindo, usando óculos escuros e blusa rosa claro, fundo laranja e marrom')
  }
}