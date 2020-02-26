var a = document.getElementsByClassName("icon_logo");

b = document.createElement('img')
b.setAttribute("height","40")
b.style.filter="brightness(20) grayscale(100%) saturate(10)"
b.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Cal_Poly_San_Luis_Obispo_wordmark.svg/1024px-Cal_Poly_San_Luis_Obispo_wordmark.svg.png"

a[0].appendChild(b)
a[0].classList.remove('icon_logo')

c = document.createElement('img')
c.setAttribute("height","40")
c.style.filter="brightness(20) grayscale(100%) saturate(10)"
c.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Cal_Poly_San_Luis_Obispo_wordmark.svg/1024px-Cal_Poly_San_Luis_Obispo_wordmark.svg.png"

a[0].appendChild(c)
a[0].classList.remove('icon_logo')
