# JWT-Payloader

A simple tool to decode and extract payload values from a JSON Web Token.

```bash
npm i jwt-payloader
```

### Usage

```javascript
import { jwtPayload } from 'jwt-payloader';

// JSON Web Token
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// example request headers using a JWT
const request = {
  headers: {
    'content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
};

// decode authorization header and return JWT payload
const decoded = jwtPayload(request);

// decoded token values
console.log(decoded);
{ sub: '1234567890', name: 'John Doe', iat: 1516239022 };


// you can also destructure an expected object value
const { sub } = jwtPayload(request);

console.log(sub);
'1234567890'
```
