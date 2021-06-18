import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID k7nRqoTtVsafrwP-ZyQRy12p9OFMfsRUNr9Re7WZKKA",
    }
})