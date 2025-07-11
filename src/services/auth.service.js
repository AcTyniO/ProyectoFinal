import jwt from 'jsonwebtoken';

const USERS = [
  { username: 'admin', password: '1234' } // podés cambiarlo o usar Firestore
];

export const login = async ({ username, password }) => {
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('Credenciales inválidas');

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido o expirado');
  }
};