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

//Appel à l'API pour obtenir les données utilisateur depuis la base de données

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


//Appel à l'API pour modifier nom et prénom de l'utilisateur
export const updateUserProfile = async (token, firstName, lastName) => {
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  if (!response.ok) {
    throw new Error(`Echec dans la mise à jour des données.`);
  }
  const data = await response.json();
  return data;
};
