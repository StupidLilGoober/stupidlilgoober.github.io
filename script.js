let navbar_path = "https://stupidlilgoober.github.io/common/html/navbar.html"

fetch(navbar_path)
	.then(res => res.text())
	.then(data => {
		document.getElementById("navbar").innerHTML = data;
});

function applySettings() {
	const largeText = localStorage.getItem("large-text")
	const boldText = localStorage.getItem("bold-text")
	const font = localStorage.getItem("font")
	const theme = localStorage.getItem("theme")

	if (largeText === "true") {
		document.body.style.fontSize = "1.5em"
	} else {
		document.body.style.fontSize = "1em"
	}

	if (boldText === "true") {
		document.body.style.fontWeight = "bold"
	} else {
		document.body.style.fontWeight = "normal"
	}

	if (font !== null) {
		document.body.style.fontFamily = font
	} else {
		document.body.style.fontFamily = "monospace"
	}

	if (theme === "light") {
		document.body.style.backgroundColor = "#ffffff"
		document.body.style.color = "#000000"
	}
}

applySettings()