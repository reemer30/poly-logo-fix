var a = document.getElementsByClassName("ic-app-header__logomark");
a[0].innerHTML = ""
b = document.createElement('img')
b.src = "https://universitymarketing.calpoly.edu/wp-content/uploads/2015/10/cal-poly-university-seal.jpg"
a[0].appendChild(b)
a[0].classList.remove('ic-app-header__logomark')
