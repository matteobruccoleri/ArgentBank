import userAdapter from "../adapters/userAdapter";

const API_URL = "http://localhost:3001/api/v1/user";

const userService = {
  // Connexion
  login: async (email, password) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.body?.token) {
      throw new Error(data?.message || "Identifiants invalides");
    }
    return data.body.token;
},

  // Récupération profil utilisateur
  getUser: async (token) => {
    const response = await fetch(`${API_URL}/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return userAdapter.userFromAPI(data.body); // ✅ Adaptation ici
  },

  // Mise à jour du profil utilisateur
  updateUser: async (token, firstName, lastName) => {
    const bodyData = userAdapter.userToAPI(firstName, lastName); // ✅ Adaptation ici
    const response = await fetch(`${API_URL}/profile`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) return false;

    // On récupère la nouvelle version du profil pour être à jour
    const updatedData = await response.json();
    return userAdapter.userFromAPI(updatedData.body);
  },
};

export default userService;