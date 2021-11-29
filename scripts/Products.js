import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener ("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    console.log(itemClicked.id)
    if (itemClicked.id.startsWith("product")) {
        const [,productID] = itemClicked.id.split("--")

        for (const product of products) {
            if (product.id === parseInt(productID)) {
                window.alert(`The ${product.name} costs: $${product.price.toFixed(2)}`)
            }
        }
    }
})