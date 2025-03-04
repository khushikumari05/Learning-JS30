let imgNodeList = document.querySelectorAll('img');
const newImage = "https://www.ugaoo.com/cdn/shop/files/Women_s-Day-Banners_Desktop_b458c2ba-5a9e-47ad-a786-fb4c2db25350.jpg?v=1740553669&width=3000";
// imgNode = document.querySelector(newImage);
imgNodeList[0].src = newImage;
const newNodeFromJS = document.createElement('h1');
newNodeFromJS.innerHTML = 'Hello from JS';
newNodeFromJS.classList.add("new-node-from-js")
document.querySelector('body').append(newNodeFromJS);