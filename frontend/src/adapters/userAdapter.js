const userAdapter = {
  // ✅ Transforme la réponse API en un format utilisable par le front
  userFromAPI: (data) => {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
  },

  // Transforme les données du front en format attendu par l'API
  userToAPI: (firstName, lastName) => {
    return {
      firstName,
      lastName,
    };
  },
};

export default userAdapter;