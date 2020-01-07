var a = document.getElementsByClassName("ic-app-header__logomark");
a[0].innerHTML = ""
b = document.createElement('img')
b.setAttribute("vspace","30")
b.src = "https://polyplanner.calpoly.edu/udirect/laf/themes/udirect/images/cplogo.png"
a[0].appendChild(b)
a[0].classList.remove('ic-app-header__logomark')
