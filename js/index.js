document.getElementById('video-catagory').addEventListener("click",function(){

})

// {status: true, message: 'successfully fetched all the categories', categories: Array(3)}
// categories
// : 
// Array(3)
// 0
// : 
// {category_id: '1001', category: 'Music'}
// 1
// : 
// {category_id: '1003', category: 'Comedy'}
// 2
// : 
// {category_id: '1005', category: 'Drawing'}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)
// message
// : 
// "successfully fetched all the categories"
// status
// : 
// true
// [[Prototype]]
// : 
// Object
function videocatagoryload(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=> showcatagory(data.categories));
}

function showcatagory(catagories1){
    catagories1.forEach(element => {
        // console.log(element.category);
        const newdiv=document.createElement("div");
        newdiv.innerHTML=`<div  class=" bg-slate-300 py-1 px-2 sm:px-5 sm:py-2 sm:text-xl  rounded-sm ">${element.category}</div>
 `      
 document.getElementById('video-catagory').appendChild(newdiv);
    });
}

function fetchallvedio(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=> console.log(data.videos));
}


fetchallvedio()
videocatagoryload();