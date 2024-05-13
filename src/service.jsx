//Appel à l'API pour la connexion

export const loginUser = async (email, password) => {
  const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',   //données envoyées en JSON
    },
    body: JSON.stringify({ email, password }),    //Dans le body, on utilise la méthode stringify pour convertir l'objet en une chaine de caractères JSON
  });

  if (!response.ok) {
    throw new Error(`Connexion failed: user not found. Status code: ${response.status}`);
  }
  const data = await response.json();  //On utilise la méthode json
  return data;
};