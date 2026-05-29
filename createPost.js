import{
    getPosts,
    savePosts,
    getCurrentUser
} from "./storage.js";
const form=document.getElementById("postForm");
const currentUser=getCurrentUser();
if(!currentUser){
    window.location.href="login.html";
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    const title=document.getElementById("title").value;
    const category=document.getElementById("title").value;
    const image=document.getElementById("image").value;
    const content=document.getElementById("content").value;
    const posts=getPosts();
    posts.push({
        id:Date.now(),
        title,
        category,
        image,
        content,
        author: currentUser.username,
        createdAt:new Date().toLocaleDateString()
    });
    savePosts(posts);
    alert("Post published successfully!");
    form.reset();
});