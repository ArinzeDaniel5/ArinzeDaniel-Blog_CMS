export function saveUsers(users){
    localStorage.setItem("users",JSON.stringify(users));
}
export function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}
export function savePosts(posts) {
  localStorage.setItem("posts",JSON.stringify(posts));
}
export function getPosts() {
        return JSON.parse(localStorage.getItem("posts")) || [];
}
export function saveCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify("user"));
}
export function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"))||[];
}
export function logout() {
    localStorage.removeItem("currentUser");
}