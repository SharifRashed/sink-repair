import { getRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


export const Requests = () => {
    const requests = getRequests()
    const listItemsArray = (request) => {

        //         return `<li class="request__delete">${request.description}<button
        //         id="request--${request.id}">
        //    <div id="flush">Flush</div>
        // </button></li>`
    }

    let html = `
        < ul >
        ${requests.map(listItemsArray).join("")
        }
      
        </ul >
    `

    return html
}