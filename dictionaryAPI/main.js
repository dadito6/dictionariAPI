const api = 'https://api.dictionaryapi.dev/api/v2/entries/en'
const form = document.getElementById('form')


form.addEventListener('submit', async(event ) =>{
event.preventDefault()
const input = document.getElementById('input').value.toLowerCase()
const ul = document.createElement('ul')
const result= document.getElementById('result')
let data = []


if (input){
let response = await fetch(`${api}/${input}`)
let terms = await response.json()
data= terms.message || terms[0].meanings[0].definitions[0].definition 



if (data){
const li = document.createElement('li')
li.appendChild(document.createTextNode(data))
ul.appendChild(li)
result.appendChild(li)
}
}

})