import { jwtDecode } from 'jwt-js-decode';

export const jwtPayload = (request) => {
  try {
    // extract any possible auth headers
    const headers = request?.headers['authorization']
      ? request.headers['authorization']
      : request.headers['Authorization'];

    // separate JWT value from bearer token
    const token = headers.split(' ')[1];

    // decode token if value is a JWT
    const decoded = jwtDecode(token);

    // return payload object
    return decoded.payload;
  } catch (err) {
    console.error(err);

    return undefined;
  }
};
