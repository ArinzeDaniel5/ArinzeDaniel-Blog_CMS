import {getPosts} from "./storage.js";
const containers = document.getElementById("postsContainer");
if(containers){
    const posts= getPosts();
    if(posts.length===0){
        containers.innerHTML=`<h2>No posts available</h2>`;
        
    }
    [...posts].reverse().forEach(post=>{
        const div=document.createElement("div");
        div.className="post-card";
        div.innerHTML=`
        <img src="${post.image}">
        <div class="post-content">
            <h3>${post.title}</h3>
            <p>${post.content.slice(0,120)}...</p>
            <a href="post.html?id=${post.id}">Read More</a>
            </div>
        `
        ;
        containers.appendChild(div);
    });
}