function openView(images,title,price){

document.getElementById("product-view").style.display="block"

document.getElementById("view-title").innerText=title
document.getElementById("view-price").innerText=price

document.getElementById("main-img").src=images[0]

}

function closeView(){
document.getElementById("product-view").style.display="none"
}
