import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=37350286-5f3aac9a725d44d4223b6e61c&image_type=photo&orientation=horizontal&per_page=12'

export const getImage = () => {
    const response = axios.get();
    return response.data
}

console.log(getImage());