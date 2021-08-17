const nameElement = document.querySelector(".name");

const displayName = (firstName, lastName) => {
	nameElement.textContent = `${firstName} ${lastName}.`;
};

displayName("Temitayo", "Salaudeen");
