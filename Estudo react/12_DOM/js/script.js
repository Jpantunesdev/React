console.log(document.body)

// select tag html

const title = document.getElementsByTagName("h1");

// select id


console.log(title);

// select class

const product = document.getElementsByClassName("product");

console.log(product)

// select all elements

const productQuery = document.querySelectorAll(".product");

const titleQuery = document.querySelectorAll("#title");

console.log(titleQuery)


// alter html (DOM)

// insertBefore

const titulo = document.getElementById("titulo");

const p = document.createElement("p")



title.insertBefore(p, title)