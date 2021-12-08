import { fetchRequests, fetchPlumbers, fetchCompletions } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const render = () => {
    fetchCompletions()
        .then(
            () => fetchPlumbers()
        )
        .then(
            () => fetchRequests()
        )
        .then(

            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
}

render()
