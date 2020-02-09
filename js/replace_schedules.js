var a = document.getElementsByClassName("icon_logo");

b = document.createElement('img')
b.setAttribute("height","40")
b.style.filter="brightness(20) grayscale(100%) saturate(10)"
b.src = "https://polyplanner.calpoly.edu/udirect/laf/themes/udirect/images/cplogo.png"

a[0].appendChild(b)
a[0].classList.remove('icon_logo')

c = document.createElement('img')
c.setAttribute("height","40")
c.style.filter="brightness(20) grayscale(100%) saturate(10)"
c.src = "https://polyplanner.calpoly.edu/udirect/laf/themes/udirect/images/cplogo.png"

a[0].appendChild(c)
a[0].classList.remove('icon_logo')
