import { jwtPayload } from '../src';

describe('Test jwtPayload function', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  const authorized = {
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  const unauthorized = {
    headers: {
      'content-type': 'application/json',
    },
  };

  it('returns payload from valid bearer token', () => {
    expect(jwtPayload(authorized)).toBeInstanceOf(Object);
  });

  it('throws error for headers missing authorization headers', () => {
    expect(jwtPayload(unauthorized)).toBeFalsy();
  });
});
