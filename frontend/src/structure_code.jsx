//fichier login.jsx (component)

const token = userService.getToken();
if(token !== null)
{
navigate("/userData");
}

onclick (use effect)
{
const isLoginOk = userService.login(email, password, rememberMe);
if(isLoginOk)
{
navigate(...);
}
else
{
// display error
}
}



//fichier header.jsx (component)

const token = userService.getToken();
if(token === null)
{
navigate("/login");
}
const user = userService.getUser();



//fichier editUser.jsx (component)

onclick :
{
const updateUserResponse = userService.updateUser(firstName, lastName);
if(updateUserResponse === true)
{
// ferme le formulaire
}
else
{
// display error
}
}



//userService.jsx (service)
{
const userService = {
login: async (email, password, rememberMe) => {
const response = await fetch(url, options);
const data = await response.json();
const token = data.token;
if(token === null)
{
return false;
}
if(rememberMe)
{
localstorage.setItem("Token", token);
}
else
{
sessionstorage.setItem("Token", token);
}
return true;
},

getToken: () => {
return localStorage.getItem("Token") || sessionstorage.getItem("Token");
},

getUser: () => {
const token = userService.getToken();
if(token === null)
{
return null;
}
const response = await fetch(url, options);
const data = await response.json();
return userAdapter.userFromAPI(data);
},

updateUser: (firstName, lastName) => {
const token = userService.getToken();
if(token === null)
{
return null;
}

const bodyData = userAdapter.userToAPI(firstName, lastName);

const response = await fetch(url, options {
body: bodyData
});
if(response.status == "ok")
{
return true;
}
return false;
},

};

export default userService;
}



//fichier userAdapter.jsx

const userAdapter = {

userFromAPI: (userAPI) => {
const user = {
firstName: userAPI.body.firstName,
lastName: userAPI.body.lastName,
};
return user;
},

userToAPI = (firstName, lastName) => {
const user = {
body: {
firstName: firstName,
lastName: lastName,
}
};
return user;
}
};

export default userAdapter;