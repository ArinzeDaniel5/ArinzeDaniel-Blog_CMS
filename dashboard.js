import {
    getPosts,
    getUsers,
    logout
} from "./storage.js";
const totalPosts=document.getElementById("totalPosts");
const totalUsers=document.getElementById("totalUsers");
const dashboardPosts=document.getElementById("dashboardPosts");
const logoutBtn=document.getElementById("logoutBtn");
const posts=getPosts();
const users=getUsers();
totalPosts.textContent=posts.length;
totalUsers.textContent=users.length;
posts.reverse().forEach(post=>{
    const div=document.createElement("div");
    div.className="dashboard-post";
    div.innerHTML=`
    <h3>${post.title}</h3>
    <p>${post.category}</p>
    <button onclick="deletePost(${post.id})">Delete</button>
    `
    ;
    dashboardPosts.appendChild(div);
});
window.deletePost=function(id){
    const updated=posts.filter(post=>post.id !==id);
    localStorage.setItem("posts",JSON.stringify(updated));
    location.reload();
}
logoutBtn.addEventListener("click",()=>{
    logout();
    window.location.href="login.html";
});