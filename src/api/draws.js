import Axios from "axios";


const axios = Axios.create( {
    baseURL: "http://localhost:8000",

    withCredentials: true,
    withXSRFToken: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },

})

async function fetchCSRFToken() {
    try {
        await axios.get("sanctum/csrf-cookie");
        console.log('CSRF Token has been set successfully');
    } catch (error ) {
        console.log('Failed to fetch CSRF Token:', error);
    }
}

export async function getAll() {
    await fetchCSRFToken()

    const response = await axios.get("api/draw")

    return response.data;
}

export async function login(){
    await fetchCSRFToken()

    const response = await axios.post("login", {
        email: "test@test.com",
        password: "password"
}, { withCredentials: true })
        .then(function (response) {
            console.log(response);
        })
      .catch(function (error) {
        console.log(error);
      });
}