// var _ = require('lodash');
// const lodash = require("lodash");
// const { greetings } = require("./helper");
// const { intersection, chunk } = require("lodash")

// const myArray1 = [1,2,3,4,5,1,1,2]
// const myArray2 = [1,2,3,4,5,1,1,2,2,3,4,5]
// console.log(_.chunk(myArray1,2))
// console.log(_.intersection(myArray1, myArray2))

const listProject = document.querySelectorAll('.project_feature-item-top')
const listItem = document.querySelectorAll('.project_feature-list')
// console.log(listProject)

// function intersection(item){
    
//     let myArray1 = ['a','b','c','d','e'];
//     let myArray2 = ['a','b','c'];
//     const myResult =[];

//     for( let i = 0; i < myArray1.length; i++){
//         console.log(myArray2.includes(myArray1[i]))
//     }
// }

// intersection();


listProject.forEach(function (item) {
    item.addEventListener("click", function (e) {
        const listElement = document.getElementsByClassName('project_feature-item-top')
        if (listElement && listElement.length) {
            for(let  i = 0; i < listElement.length; i++) {
                let item = listElement[i];
                item.classList.remove('active_project-top');
                item.classList.add('project_un_active_project-top')

            }
            item.classList.remove('project_un_active_project-top')
            item.classList.add('active_project-top');
            
            listItem.forEach(function (itemList) {
                let itemArray =item.innerText.split('/')
                let itemListArray = itemList.innerText.split('\n').map((it) => it.trim())
                console.log(itemArray)
                console.log(itemListArray)
                
                // function intersection() {
                //     for( let i = 0; i < itemListArray.length; i++){
                //         console.log(itemArray.includes(itemListArray[i]))
                //                 return itemArray.includes(itemListArray[i])
                // }}
                let intersection = itemListArray.filter(x => itemArray.includes(x));
                // let result = itemList.innerText.includes(item.innerText)
                if(item.innerText.includes('All')){
                    itemList.parentElement.classList.remove('display_none')  
                    itemList.parentElement.classList.add('display_block')   
                } else{
                    if(intersection.join() ===''){
                        itemList.parentElement.classList.add('display_none')
                        itemList.parentElement.classList.remove('display_block')   
                    } else{
                        itemList.parentElement.classList.remove('display_none')   
                        itemList.parentElement.classList.add('display_block')   
                    }
                }
            });
        }
})
})