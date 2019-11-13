import { validateToken } from '../../client/validateToken';

describe('validateToken', () => {
  it('removes expired token from storage', () => {
    const expiredToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOTZmYTFlYTQxYTA4MGY4YjIxMjMwMiIsImVtYWlsIjoiZGVtb0BzdDYuaW8iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE1NzM1OTA4NjMsImV4cCI6MTU3MzU5MjY2M30.VA1nsJLxGFGp60TWHiUVPQq7dZdRwfYH22pq9_8l0YU';

    localStorage.setItem('token', expiredToken);

    const result = validateToken(expiredToken);
    expect(result).toBe(false);

    const lsItem = localStorage.getItem('token');
    expect(lsItem).toBe(null);
  });
});
