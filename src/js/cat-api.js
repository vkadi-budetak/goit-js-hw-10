import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_H4P0gB8yO667tOuB7s8In6EH2z0sgaQJWYLZiSuxWmKnhuKtEIEBrLKfSDIRvigL";

function fetchBreeds() {
return axios.get('https://api.thecatapi.com/v1/breeds')
} 

function fetchCatByBreed(breedId) {
return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
}

export { fetchBreeds, fetchCatByBreed };
