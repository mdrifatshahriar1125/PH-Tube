document.getElementById('video-catagory').addEventListener("click", function () {

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
function videocatagoryload() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => showcatagory(data.categories));
}

function showcatagory(catagories1) {
    catagories1.forEach(element => {
        // console.log(element.category);
        const newdiv = document.createElement("div");
        newdiv.innerHTML = `<div id="btn-${element.category_id}" onclick="fetchdifferentcatagoricalvideo(${element.category_id})"  class=" bg-slate-300 hover:bg-red-500 hover:text-white py-1 px-2 sm:px-5 sm:py-2 sm:text-xl  rounded-sm ">${element.category}</div>
 `
        document.getElementById('video-catagory').appendChild(newdiv);
    });
}

function fetchallvedio() {
    showloader();
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data =>{  
            removeactiveclass()
            const visitedbutton1=document.getElementById("btnall");
            visitedbutton1.classList.add("active");

            showallvideo(data.videos)} );
}

function showallvideo(videos) {
    const videoload = document.getElementById('video-load');
     videoload.innerHTML="";

     if (!document.getElementById('video-load').classList.contains("grid")) {
        document.getElementById('video-load').classList.add("grid");
      }

    videos.forEach(video => {

        // console.log(video)
        const newvideo = document.createElement('div');
        newvideo.innerHTML = `
     <div class="flex flex-col gap-2">
                <div class=" relative">
              
                    <img class="w-full h-48 object-cover rounded-lg" src="${video.thumbnail}" alt="">
     
                    <p class="absolute bottom-2 right-2 text-white bg-black px-2 py-1 rounded-md">3hrs 56 min ago</p>
                    
                </div>
                <div class="flex gap-1">
                    <div>
                       
                        <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="">
                        
                    </div>
                        
                    <div>
                        <p class="font-semibold text-xl">${video.title}</p>
                     <div class="flex flex-row sm:flex-col gap-4 sm:gap-0">
                        <div class="flex items-center">
                            <p>${video.authors[0].profile_name}</p>
                            <p>${video.authors[0].verified ? '<img class="h-5"  src="assets/varified icon.png" alt="">' : ''}</p>
                          
                            
                            
                        </div>
                        <p class="flex gap-3">${video.others.views} views </p>
                     </div>
                    </div>
                </div>

            </div>

    `

        videoload.appendChild(newvideo);
    })
    removeloader()
}

function fetchdifferentcatagoricalvideo(catagory_id) {
    console.log(catagory_id)
    showloader()
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${catagory_id}`)
        .then(res => res.json())
        .then(data =>{
            removeactiveclass()
            const visitedbutton=document.getElementById(`btn-${catagory_id}`);
            visitedbutton.classList.add("active");
            showcatagoricalvideos(data.category)} );
       
}

function showcatagoricalvideos(video1) {
   
    const videoload = document.getElementById('video-load');
    videoload.innerHTML="";

    if(video1.length<1){
        videoload.classList.remove("grid");
       const newvideo = document.createElement('div');
        newvideo.innerHTML = `
        
           <div class="flex flex-col justify-center items-center py-20 sm:py-24 md:py-32">
                <div class="mx-auto"><img src="assets/Icon.png" alt=""></div>
                <div class="mx-auto  text-xl sm:text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</div>

            </div>
        ` 
        videoload.appendChild(newvideo);
        removeloader();
        return;
    }

    video1.forEach(video => {
        
if (!document.getElementById('video-load').classList.contains("grid")) {
    document.getElementById('video-load').classList.add("grid");
  }
        // console.log(video)
        const newvideo = document.createElement('div');
        newvideo.innerHTML = `
     <div class="flex flex-col gap-2">
                <div class=" relative">
              
                    <img class="w-full h-48 object-cover rounded-lg" src="${video.thumbnail}" alt="">
     
                    <p class="absolute bottom-2 right-2 text-white bg-black px-2 py-1 rounded-md">3hrs 56 min ago</p>
                    
                </div>
                <div class="flex gap-1">
                    <div>
                       
                        <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="">
                        
                    </div>
                        
                    <div>
                        <p class="font-semibold text-xl">${video.title}</p>
                       <div class="flex flex-row sm:flex-col gap-4 sm:gap-0">  
                        <div class="flex items-center">
                            <p>${video.authors[0].profile_name}</p>
                            <p>${video.authors[0].verified ? '<img class="h-5"  src="assets/varified icon.png" alt="">' : ''}</p>
                          
                            
                            
                        </div>
                        <p class="flex gap-3">${video.others.views} views </p>
                        </div>
                    </div>
                </div>

            </div>

    `

        videoload.appendChild(newvideo);
    })
    removeloader()
}

// function handleButtonClick() {
//     // Remove 'active' class from all buttons
//     document.querySelectorAll(".btn").forEach(button => {
//         button.classList.remove("active");
//     });

//     // Add 'active' class to the clicked button
//     catagory_id.classList.add("active");
//   }

  function removeactiveclass() {
    const btnallactive = document.getElementsByClassName("active");
    for (let b of btnallactive) {
        b.classList.remove("active")
    }
}

function showloader() {
    document.getElementById("loader").classList.remove("hidden")
    document.getElementById("video-load").classList.add("hidden")

}
function removeloader() {
    document.getElementById("loader").classList.add("hidden")
    document.getElementById("video-load").classList.remove("hidden")
}

fetchallvedio()
videocatagoryload();