console.log('Client side javascript file is loaded!')

const locationForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

locationForm.addEventListener('submit',(e)=>{
    messageOne.textContent ='Loading...'
    messageTwo.textContent =''
    e.preventDefault()
    const location = search.value
    fetch("http://localhost:3000/weather?address="+location).then((response)=>{
    messageOne.textContent =''
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent =data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        
    })
})
})
