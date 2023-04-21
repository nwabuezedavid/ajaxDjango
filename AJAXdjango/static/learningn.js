const input = document.querySelector('.input')
const submite = document.querySelector('.submite')
const main__item__head = document.querySelector('.main__item__head')
const endite = document.querySelector('.endite')
const  deletes = document.querySelector('.delete')
const  reset = document.querySelector('.reset')
const  mainCon = document.querySelector('.main__display')
console.log(location.origin);
console.log(location.port);
console.log(location.protocol);
console.log(location.search == input.value);
let innertextc = ""
let inis = new Date().getTime().toString()
let ini = 'ids'+ inis 
function htmlDisplay(e,val) {
    innertextc +=`
    <span class="main__item" id=${e}>
                    <h2 class="main__item__head" >${val}</h2>
                    <small>
                        <i class="bi bi-trash red delete" id=${e}></i>
                        <i class="bi bi-pen blue endite" id=${e}></i>
                    </small>
                </span>
    `
    mainCon.innerHTML = innertextc
}
update = false
submite.addEventListener('click',(e)=>{
    e.preventDefault()
    value = input.value
    if( update == false && value != "" && value != null ){
        createmessage(ini, value)
        // getstorage()
    }
    input.value =""
})

function localStormain() {
    let loads = localStorage.getItem('listed')? 
    JSON.parse(localStorage.getItem('listed') ): [] 
return loads
}
function createmessage(id, value) {
    const mainadd = {id, value}
    let ds = localStormain()
ds.push(mainadd)
    let loads = localStorage.setItem('listed', JSON.stringify(ds)) 
    
    console.log(ds);
}


function getstorage( ) {
    const loc = JSON.parse(localStorage.getItem('listed'))

    loc.forEach(e => {
        htmlDisplay(e.id,e.value)
      
        
    });
    mainCon.addEventListener('click',(e)=>{
       

       const id_target =  e.target.id
       const class_target =  e.target.className
        
        

        if (class_target == "bi bi-trash red delete") {
            
            // e.preventDefault()
            let items = localStormain()
            items =items.filter((items)=>{
                
                if (items.id !== id_target) {
                    return items
                }
            })
            localStorage.setItem('listed', JSON.stringify(items))
            location.reload()
        }
        else if (class_target == "bi bi-pen blue endite") {
            let items = localStormain()
            
            items.forEach(e => {
                if (e.id == id_target){

                    input.value =  e.value
                }
            });
            update = true
            submite.classList.add('update')
            submite.classList.remove('submite')
            let updatebrn = document.querySelector('.update')
            updatebrn.innerHTML = "update"
            value = input.value
            values = input.value
            updatebrn.addEventListener('click',(e)=>{
            // e.preventDefault()
            
            items =items.map((items)=>{
            
                if (items.id == id_target) {
                    items.value = value
                }
                return items
            })
            localStorage.setItem('listed', JSON.stringify(items))
            // location.reload()
            })
        }
    })

    
}
getstorage()
reset.addEventListener('click',()=>{
    localStorage.removeItem('listed')
    location.reload()
    // location.href = "home.html"
})


// function manin(ini, values) {
    
//     if(values !== ""){
//         innertextc+=
//         `
//         <span class="main__item" id =${ini}>
//         <h2 class="main__item__head">${values}</h2>
//         <small>
//             <i class="bi bi-trash red delete" id =${ini} ></i>
//             <i class="bi bi-pen blue endite" id =${ini}></i>
//         </small>
//     </span>
//         `
//         mainCon.innerHTML = innertextc
        
//     }
// }
// let update = false
// submite.addEventListener('click', (e)=>{
//     e.preventDefault();
//     values = input.value
//    if ( update == false){

//        addLocal(ini, values)
//      location.reload()
//    }
//     input.value = " "

// //  removeLocal() 
// })

// function getLocal() {
    
//     na = JSON.parse(localStorage.getItem('list'))
//     na2 = localStorage.getItem('list')
//     //    if(na.length  > 0){
        
//                na.forEach(e => {
//     manin(e.idu, e.valu )
           
//         });

//     mainCon.addEventListener('click',(e)=>{
//         we = e.target.classList
//         delte = we == "bi bi-trash red delete"
//         ids =  e.target.id
//         // console.log(id);
//         if (e.target.classList== "bi bi-trash red delete" ){
//           item = main__fetch()
        
//          item =  item.filter((item)=>{
//             //   console.log('ass',item.idu);
//             if (item.idu !== ids){
                
//                 return item 
//             }
//             console.log(item);
//           })
      
//           localStorage.setItem("list",JSON.stringify(item))
//           location.reload()
//         }
//         else if (e.target.classList== "bi bi-pen blue endite" ){
//             item = main__fetch()
//             item.forEach(e => {
//                 console.log(e);
//                 if(e.idu == ids){
//                     input.value = e.valu
//                 }
//             });
//             values = input.value
            
//             submite.classList.add('update')
//             submite.classList.remove('submite')
//             updated = document.querySelector('.update')
//             update = true
           
            
                
//             updated.addEventListener('click', (e)=>{
//                 e.preventDefault()
//                 item =  item.map((item)=>{
                        
//                         if (item.idu == ids){
//                           item.valu =  values
//                         }
//                         return item 
//                     })
                
                 
//                    localStorage.setItem("list",JSON.stringify(item))
//                    location.reload()
//               })
//         }
        
//     })
    
// }
// getLocal()
// function main__fetch(idu, valu) {
//     return  itezms = localStorage.getItem('list')
//         ? JSON.parse(localStorage.getItem('list'))
//         : [];
        
//         return itezms
//     }
//     function addLocal(idu, valu) {
//     let glusc = { idu, valu }
//     itezms = main__fetch()
//     itezms.push(glusc)
    
// // console.log("sums",sums);


//     localStorage.setItem('list' ,JSON.stringify(itezms))
   
    
// }

// reset.addEventListener('click',(e)=>{
// e.preventDefault()
// localStorage.removeItem('list')
// location.reload()
// })