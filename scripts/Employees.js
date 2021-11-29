import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener ("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")) {
        const [,employeeId] = itemClicked.id.split("--")

        let itemsSold = 0

        for (const order of orders) {
            if (order.employeeId === parseInt(employeeId)) {
                itemsSold = itemsSold + 1
            }
        }

        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                window.alert(`The ${employee.name} has sold: ${itemsSold}`)
            }
        }
    }
})