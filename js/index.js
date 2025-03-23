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
    .then(data=> showallvideo(data.videos));
}

function showallvideo(videos){
    const videoload=document.getElementById('video-load');

videos.forEach(video=>{
    console.log(video)
    const newvideo=document.createElement('div');
    newvideo.innerHTML=`
     <div class="flex flex-col gap-2">
                <div class=" relative">
              
                    <img class="w-full h-56 object-cover rounded-lg" src="${video.thumbnail}" alt="">
     
                    <p class="absolute bottom-2 right-2 text-white bg-black px-2 py-1 rounded-md">3hrs 56 min ago</p>
                    
                </div>
                <div class="flex gap-1">
                    <div>
                       
                        <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="">
                        
                    </div>
                        
                    <div>
                        <p class="font-semibold text-xl">${video.title}</p>
                        <div class="flex items-center">
                            <p>${video.authors[0].profile_name}</p>
                            <p>${video.authors[0].verified ? '<img class="h-5"  src="assets/varified icon.png" alt="">' : ''}</p>
                          
                            
                            
                        </div>
                        <p class="flex gap-3">${video.others.views} views </p>

                    </div>
                </div>

            </div>

    `

    videoload.appendChild(newvideo);
})

}


fetchallvedio()
videocatagoryload();