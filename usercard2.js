let msdoldinfo={
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUEZr3VLSKYtG2wvoULa8Dj8t2o4gxbb4rQ&usqp=CAU",
    name: "Mahendra Singh Dhoni",
    description: "Captain of Indian Cricket Team"
}

let msdnewinfo={
    imgurl: "https://i.pinimg.com/736x/69/77/01/6977010efc75270613b3f5f4d52f4bf7.jpg",
    name: "Mahendra Singh Dhoni",
    description: "Captain of Indian Cricket Team & CSK"
}

let ismsdold=true;
let displayobject;
let flipdata=function() {
    if(ismsdold){
        displayobject=msdoldinfo;
        ismsdold=false;
    }
    else{
        displayobject=msdoldinfo;
        ismsdold=true;
    }
    document.getElementById("msd-img").src=displayobject.imgurl;
    document.getElementById("msd-name").innerHTML=displayobject.name;
    document.getElementById("msd-description").innerHTML=displayobject.description;
}