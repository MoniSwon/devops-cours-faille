const h1 = document.createElement('h1')
const params = new URLSearchParams(window.location.search)
const mister = params.get('name')

h1.innerHTML = `Hello ${mister}`
document.querySelector('body').appendChild(h1)
