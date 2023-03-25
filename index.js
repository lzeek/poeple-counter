let peopleNum= document.getElementById('people-cnt')
let incrementBtn= document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn')
let lastCountNum = document.getElementById('last-count')
let errorDisplay =document.getElementById('error-display')

let peopleTotal = 0 //Number of people per increament before saved
let peopleGroups=[]


function incrementCount(){
    peopleTotal+=1
    peopleNum.textContent=peopleTotal
    
}

function resetCounter(){
    peopleTotal=0
    peopleNum.textContent=peopleTotal
    lastCountNum.textContent=''
    errorDisplay.textContent=''
}

function saveCount(){
    if(peopleTotal>0){
        lastCountNum.textContent+=`${peopleTotal} | ` //updates per groups
        peopleNum.textContent = 0
        errorDisplay.textContent=''
        peopleGroups.push(peopleTotal)
        peopleTotal = 0
    }else{
        errorDisplay.textContent='No increment made there is nothing to save. Pointless saving a Zero'
    }
}