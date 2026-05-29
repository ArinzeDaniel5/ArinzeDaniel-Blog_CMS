import {
    saveUsers,
    getUsers,
    saveCurrentUser
} from "./storage.js";
const registerForm=document.getElementById("registerForm");
const loginForm=document.getElementById("loginForm");
if(registerForm){
    registerForm.addEventListener("submit",e=>{
        e.preventDefault();
        const username =document.getElementById("username").value;
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        const users=getUsers();
        const existing=users.find(user=>user.email===email);
        if(existing){
            alert("user already exists");
            return;
        }
        users.push({
            id:Date.now(),
            username,
            email,
            password
        });
    
    saveUsers(users);
    alert("Registration Successful!");
    window.location.href="login.html";
});
}
if(loginForm){
    loginForm.addEventListener("submit",e=>{
        e.preventDefault();
        const email =document.getElementById("email").value;
        const password =document.getElementById("password").value;
        const users=getUsers();
        const user=users.find(user=>user.email===email&&user.password);
        if(!user){
            alert("invalid credentials");
            return;
        }
        saveCurrentUser(user);
        window.location.href="dashboard.html";
    });
}