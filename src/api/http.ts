import axios from 'axios'

const baseURL: string | undefined = import.meta.env.VITE_API_URL

if (!baseURL && import.meta.env.PROD) {
  throw new Error('VITE_API_URL não definido. Defina a variável de ambiente antes de publicar.')
}

const http = axios.create({
  baseURL: baseURL ?? 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: import.meta.env.VITE_API_USER
    ? { username: import.meta.env.VITE_API_USER, password: import.meta.env.VITE_API_PASSWORD ?? '' }
    : undefined,
})

export default http
