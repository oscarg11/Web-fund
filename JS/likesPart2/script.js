var likes = [0,0,0]; //set likes to 0 for each box
var likesElement = [document.querySelector("#likes1"),//adds each like id into an array 
document.querySelector("#likes2"),document.querySelector("#likes3")];

console.log(likesElement)
// adds one like to post
function add1(id){
    likes[id]++;
    likesElement[id].innerText = likes[id] + " like(s)"
    console.log(likes);
}