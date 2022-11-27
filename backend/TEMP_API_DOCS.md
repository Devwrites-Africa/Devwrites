# **API DOCS**

<table>

<th> URL </th>
<th> Example Success Response </th>

<tr>
<td> <code> /v1/auth/register</code> </td>
<td> <pre>
{
  "data": {
    "account": {
      "email": "obisiket@yahoo.com",
      "password": "$2b$10$rjalpzM3ckydaDdHBndR..04NcrCLeI36BekGvTqIP9ykiUP84NMe",
      "role": [],
      "password_reset_count": 0,
      "id": "63837f7d4b7caf2ce1454150",
      "created_at": "2022-11-27T15:17:17.305Z",
      "updated_at": "2022-11-27T15:17:17.305Z",
      "v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM3ZjdkNGI3Y2FmMmNlMTQ1NDE1MCIsImZsYWciOiJhdXRoIiwiaWF0IjoxNjY5NTYyMjM3LCJleHAiOjE2NzIxNTQyMzd9.kS4feuSkge4QaVmYsFgKdvjqRa_tGw027p6s558B9Y8"
  },
  "status": "ok"
}
</pre> </td>

<td> <code> /v1/auth/login</code> </td>
<td> <pre>
{
  "data": {
    "account": {
      "email": "obisiket@yahoo.com",
      "password": "$2b$10$rjalpzM3ckydaDdHBndR..04NcrCLeI36BekGvTqIP9ykiUP84NMe",
      "role": [],
      "password_reset_count": 0,
      "id": "63837f7d4b7caf2ce1454150",
      "created_at": "2022-11-27T15:17:17.305Z",
      "updated_at": "2022-11-27T15:17:17.305Z",
      "v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODM3ZjdkNGI3Y2FmMmNlMTQ1NDE1MCIsImZsYWciOiJhdXRoIiwiaWF0IjoxNjY5NTYyMjM3LCJleHAiOjE2NzIxNTQyMzd9.kS4feuSkge4QaVmYsFgKdvjqRa_tGw027p6s558B9Y8"
  },
  "status": "ok"
}
</pre> </td>

