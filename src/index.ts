import { jwtDecode } from 'jwt-js-decode';

export const jwtPayload = (request): any => {
  try {
    const token = request.headers.authorization.split(' ')[1];

    const decoded = jwtDecode(token);

    return decoded.payload;
  } catch (err) {
    console.log(err);
    return null;
  }
};
