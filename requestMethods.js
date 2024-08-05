import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YThjNjQ3NGJkMjgwMzE5MThiYTA0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMjMzNjk0NywiZXhwIjoxNzIyNTk2MTQ3fQ.kRjhCndun1pmDQHx2fJ3iBgD0l8CmYsklfDo8q17khY"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})