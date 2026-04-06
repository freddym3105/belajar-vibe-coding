import { mysqlTable, serial, text } from 'drizzle-orm/mysql-core'

// Example high-level schema for implementer — keep simple
export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull()
})
