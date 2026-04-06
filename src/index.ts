import { Elysia } from 'elysia'

// High-level server entrypoint — keep minimal for implementer
const app = new Elysia()

app.get('/', () => ({ status: 'ok', message: 'hello world' }))

// In a full implementation: initialize Drizzle client and attach to app context

app.listen(3000)

console.log('Elysia running on http://localhost:3000')
