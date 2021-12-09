// import { mainContainer } from "./main.js"

const applicationState = {

    requests: []
}

const API = "http://localhost:8088"


export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        // or/ .then(res => res.json())

        //fetches a request from an external API and returns requested data
        // the result of the json response is the promise that is evualated
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}


export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}