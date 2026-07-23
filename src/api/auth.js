const API_URL = 'http://localhost:4000/api/graphql';

export async function loginUser(email, password) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation Login($email: String!, $password: String!) {
          loginUser(email: $email, password: $password) {
            token
            user {
              id
              email
            }
          }
        }
      `,
      variables: { email, password }
    })
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.loginUser;
}

export async function registerUser(email, password) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation Register($email: String!, $password: String!) {
          registerUser(email: $email, password: $password) {
            id
            email
          }
        }
      `,
      variables: { email, password }
    })
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.registerUser;
}