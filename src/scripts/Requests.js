import { getRequests, getPlumbers } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const listedRequests = (request) => {
    const plumbers = getPlumbers()
    return `<li>
    ${request.description}
  <select class="plumbers" id="plumbers">
  <option value="">Choose</option>
  ${plumbers.map(plumber => {
        return `<option value="${request.id}==${plumber.id}">$plumber.name}</option>`
    }
    ).join("")
        }
    </select>
        </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        < ul >
        ${requests.map(listedRequests).join("")}
        
        </ul >
    `

    return html
}