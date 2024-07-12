import axios, { AxiosInstance } from "axios";

export const apiInstanceWithCredential: AxiosInstance = axios.create({
    baseURL: 'https://4a24-210-218-52-13.ngrok-free.app',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzIwOTM4MTI0fQ.y90PKOJwYipUE62grhzglXRODJ_ZTRfZjWoSH8LqeMh6TeRrei5DNSrw29UtFtPP_kYIcNPPUYCjDvIbvVNFrg'
    },
    withCredentials: true,
});

export const apiInstance: AxiosInstance = axios.create({
    baseURL: 'https://4a24-210-218-52-13.ngrok-free.app',
    headers: {
      'Content-type': 'application/json'
    },
});