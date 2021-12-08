const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

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

export const fetchCompletions = () => {
    return fetch(`${API}/completion`)
        .then(response => response.json())
        .then(
            (completionObj) => {
                console.log(completionObj)
                applicationState.completion = completionObj
            }
        )
}
export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (plumberData) => {
                console.log(plumberData)
                applicationState.plumbers = plumberData
            }
        )
}

const applicationState = {
    plumbers: {},
    requests: []
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

export const getPlumbers = () => {
    return [...applicationState.plumbers]
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