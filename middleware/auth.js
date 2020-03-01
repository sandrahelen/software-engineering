import jwt from 'jsonwebtoken';
import config from '../server/config';

const { jwtsecret } = config;

export default (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(401).json({ msg: 'authorizaton denied' });

  try {
    const decoded = jwt.verify(token, jwtsecret);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};