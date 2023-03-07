import { getProducts } from "./database.js"

const products = getProducts()

export const allProducts = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

