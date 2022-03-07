export function toListResponse<T>(data: T[], total) {
  return {
    result: data,
    total,
  };
}

export function toLimitOffset(page = 1, size = 10) {
  const limit = size;
  const offset = (page - 1) * size;
  return {
    limit,
    offset,
  };
}

/*
- 1, 10
- 10, 0

- 2, 10
- 10, 10

- 3, 10
- 10, 20
*/
