//Appel à l'API pour la connexion

export const loginUser = async (email, password) => {
  const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Connexion failed: user not found. Status code: ${response.status}`);
  }

  const data = await response.json();
  return data.body; // On retourne uniquement le body qui contient le token
};


export const getUserProfile = async (token) => {
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: Status code: ${response.status}`);
  }

  const data = await response.json();
  return data.body; // On retourne uniquement le body qui contient les informations de l'utilisateur
};