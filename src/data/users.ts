import bcrypt from "bcryptjs";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

// In-memory user store (resets on server restart)
const users: User[] = [];

let nextId = 1;

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}

export function createUser(name: string, email: string, password: string): User {
  const hashed = bcrypt.hashSync(password, 10);
  const user: User = {
    id: String(nextId++),
    name,
    email: email.toLowerCase(),
    password: hashed,
  };
  users.push(user);
  return user;
}
