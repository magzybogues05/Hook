import axios from 'axios';
const authEndpoint="https://accounts.spotify.com/authorize?";
const clientID="1285119dcd0c4f479d2b199bac9cc156";
const redirectUri="http://localhost:3000";
const scopes=["user-library-read","playlist-read-private"];

export const  loginEndpoint= `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/",
});

//instead of passing token in headers with every axios call, we can do following

export const setClientToken=(token)=>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization ="Bearer "+token;
        return config;
    });
};

export default apiClient;