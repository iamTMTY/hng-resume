const ballContainer = document.querySelector(".ball_container");
const ball = document.querySelector(".ball");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

// ballContainer.addEventListener("click", toggleTheme);
// // ball.addEventListener("click", toggleTheme)

// function toggleTheme() {
// 	const root = document.documentElement;

// 	if (ballContainer.classList.contains("dark")) {
// 		root.style.setProperty("--bg-color", "rgb(236, 236, 236)");
// 		root.style.setProperty("--text-color", "#000");
// 		root.style.setProperty("--accent-color", "rgb(197, 118, 0)");
// 		root.style.setProperty("--tertiary-color", "rgb(175, 204, 255)");
// 		ball.style.right = "0";
// 		ball.style.left = "unset";
// 	} else {
// 		root.style.setProperty("--bg-color", "rgb(0, 8, 22)");
// 		root.style.setProperty("--text-color", "#fff");
// 		root.style.setProperty("--accent-color", "rgb(253, 152, 0)");
// 		root.style.setProperty("--tertiary-color", "rgb(0, 21, 58)");
// 		ball.style.right = "unset";
// 		ball.style.left = "0";
// 	}

// 	ballContainer.classList.toggle("dark");
// 	// ballContainer.classList.toggle("light");
// 	// --bg-color: rgb(236, 236, 236);
// 	// --text-color: #000;
// 	// --accent-color: rgb(197, 118, 0);
// 	// --tertiary-color: rgb(175, 204, 255);
// }
