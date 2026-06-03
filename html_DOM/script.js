//Getting element by id
const firstParagraph = document.getElementById("demo")

firstParagraph.innerHTML = "This paragraph was accessed via the paragraph's id."

//Getting Elements by tag name
const secondParagraph = document.getElementsByTagName("p");

secondParagraph[1].innerHTML = "This paragraph was accessed using the tag name"

//Getting elements using the tag name
const thirdParagraph = document.getElementsByClassName("demo2")[0];

thirdParagraph.innerHTML = "This paragraph was acccessed using the className"