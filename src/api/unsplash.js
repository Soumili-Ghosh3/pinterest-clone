import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 03rLFqpPo-J7uc6V5gVZGyBMb455Ng-EYMcIWeVeQ1Q",
    }
})