

// const check=()=>{
//    return new Promise((resolve,reject)=>{
//        var number=Math.random()*50 +2;
//       if(number>10){
//           resolve(`${number}is greater than 10`);
//       }
//       reject("opps some error occur");
//    })
// }
// const color=(color,delay)=>{
//     return new Promise((resolve,reject)=>{
//         setInterval(() => {
//             document.body.style.backgroundColor=color;
//             resolve();
//         }, delay);
//     });
// }

// check().then((data)=>{
//     console.log("ha bhai 10 se bada h");
//     console.log(data);
// }).catch((e)=>{
//     console.log(e);
//     console.log("error ara h");
// });
// color('yellow',1000)
// .then(()=> color('red',1000) )
// .then(()=> color('orange',1000) )
// .then(()=> color('blue',1000) )
// .then(()=> color('green',1000) )
// .catch((e)=>{
// console.log(e);
// });
// `api.openweathermap.org/data/2.5/weather?q=${value}&appid=fccbe3915a5807b1d5fedf2852d14bed`
const form=document.querySelector("#formdata");
form.addEventListener('submit',async(e)=>{
try{
    e.preventDefault();
    document.querySelector('.grid').innerHTML='';
    var value=form.elements.search.value;
    let call=await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);
   imgprovider(call.data);
   document.getElementById('text').value='';
 
}catch(e){
console.log(`error is -: ${e}`);
}
});

const imgprovider =(data)=>{
    for(let value of data){
        if(value.show.image){
            const img= document.createElement('img');
        let image=value.show.image.medium;
        img.src=image;
        img.setAttribute('class','img')
       
        document.querySelector(".grid").append(img);
        }
        
    }
    }

    
