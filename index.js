let peopleNum= document.getElementById('people-cnt')
let incrementBtn= document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let lastCountNum = document.getElementById('last-count')


let peopleTotal = 0



function incrementCount(){
    peopleTotal+=1
    peopleNum.textContent=peopleTotal
    
}

function resetCounter(){
    peopleTotal=0
    peopleNum.textContent=peopleTotal
    lastCountNum.textContent=''
}

function saveCount(){
    lastCountNum.textContent+=`${peopleTotal} | `
    peopleNum.textContent = 0
    peopleTotal = 0
}