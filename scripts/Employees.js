import { getEmployees, getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()

const filterOrders = (singleOrder) => {
    let employeeSales = 0;

    for (const order of orders) {
        if (order.employeeId === singleOrder.id) {
            employeeSales += 1
        }
        
    }
    return employeeSales
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const productsSold = filterOrders(employee) 

                    window.alert(`${employee.name} sold ${productsSold} products`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

