let images = document.getElementsByTagName('img')
console.log("image replaced" + images[0].title);
images[0].src = "https://polyplanner.calpoly.edu/udirect/laf/themes/udirect/images/cplogo.png"
/*
for(let i = 0; i < images.length; i++){
	if (images[i].src == "https://myportal.calpoly.edu/media/skins/universality/wintergreen/images/portal_logo_195x47.svg"){
		console.log("header found");
//		images[i].src = "https://i.imgur.com/rRxaClm.jpg"
		images[i].src = "https://polyplanner.calpoly.edu/udirect/laf/themes/udirect/images/cplogo.png"
	}
}
*/
