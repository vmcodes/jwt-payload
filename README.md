# jwt-payloader

A simple tool to decode and extract a payload from a jwt.

```bash
npm i jwt-payloader
```

### Usage

```javascript
import { jwtPayload } from 'jwt-payloader';
// jwt token
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// sample request headers
const request = {
  headers: {
    'content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
};

// decode authorization headers and return jwt payload
const decoded = jwtPayload(request);

// example object returned
console.log(decoded);
`{ sub: '1234567890', name: 'John Doe', iat: 1516239022 }`;
```
