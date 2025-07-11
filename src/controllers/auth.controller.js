import * as AuthService from '../services/auth.service.js';

export const login = async (req, res) => {
  try {
    const token = await AuthService.login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    const decoded = AuthService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Token inválido o expirado' });
  }
};