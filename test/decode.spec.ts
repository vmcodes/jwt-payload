import { jwtPayload } from '../src';

describe('Test jwtPayload function', () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  const authorized = {
    headers: {
      'content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  const unauthorized = {
    headers: {
      'content-Type': 'application/json',
    },
  };

  it('return payload from valid jwt Bearer token', () => {
    expect(jwtPayload(authorized)).toBeTruthy();
  });

  it('throws error for headers missing authorization', () => {
    expect(jwtPayload(unauthorized)).toBeFalsy();
  });

  it('throws error for missing headers', () => {
    expect(jwtPayload({})).toBeFalsy();
  });
});
