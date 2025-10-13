// Lesson 3 - Events Starter

import {addQuote, deleteQuote, updateQuote, getAllQuotes} from './quote.js'
let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.querySelector('input[id="content"]')
const authorInput = document.querySelector('input[id="author"]')
const idInput = document.querySelector('input[id="quoteId"]')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
  const divElement = document.createElement('div')
  divElement.setAttribute('data-id', quote.id)

  const pQuote = document.createElement('p')
  pQuote.textContent = quote.content

  const pAuthor = document.createElement('p')
  pAuthor.textContent = quote.author

  const editButton = document.createElement('button')
  editButton.classList.add('edit-btn')
  editButton.setAttribute('data-id', quote.id)
  editButton.textContent = 'Edit'

  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete-btn')
  deleteButton.setAttribute('data-id', quote.id)
  deleteButton.textContent = 'Delete'
  
  divElement.append(pQuote,pAuthor,editButton,deleteButton)

  divElement.addEventListener('click',(event) => {
    //หาค่า id ของ quote ที่กด
    const id = Number(event.target.getAttribute('data-id'))

    if(event.target.classList.contains('edit-btn')){
      //Find quote by id
      const findQuote = getAllQuotes().find(q => q.id === id)
      if(findQuote){
        idInput.value = findQuote.id
        contentInput.value = findQuote.content
        authorInput.value = findQuote.author
      }
    }

    if(event.target.classList.contains('delete-btn')){
      deleteQuote(id)
      deleteQuoteFromDOM(id)
    }
  })
  return divElement
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const addQuote = createQuoteElement(quote)
  quoteList.append(addQuote)
}
function updateQuoteInDOM(quote) {
  const updateQuote = quoteList.querySelector(`[data-id="${quote.id}"]`)
  if (updateQuote) {
    const pList = updateQuote.querySelectorAll('p')
    pList[0].textContent = quote.content
    pList[1].textContent = quote.author
  }
}
function deleteQuoteFromDOM(id) {
  const deleteQuote = quoteList.querySelector(`[data-id="${id}"]`)
  if (deleteQuote) {
    deleteQuote.remove()
  }
}
function renderQuotes() {
  quoteList.innerHTML = ''
  const quotes = getAllQuotes()
  quotes.forEach(q => addQuoteToDOM(q))
}
function showRandomQuote() {
  const quotes = getAllQuotes()
  if (quotes.length === 0) {
    randomDisplay.textContent = '-- No quotes to show --'
    return
  }
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]
  randomDisplay.textContent = `"${quote.content}" — ${quote.author}`
}

// Event listeners for form submission, edit, and delete clicks
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const content = contentInput.value.trim()
  const author = authorInput.value.trim()
  const id = idInput.value

  if (!content || !author) return

  if (id) {
    // Update existing quote
    const updated = updateQuote(Number(id), content, author)
    updateQuoteInDOM(updated)
  } else {
    // Add new quote
    const newQuote = addQuote(content, author)
    addQuoteToDOM(newQuote)
  }

  // Reset form
  form.reset()
  idInput.value = ''
})

randomBtn.addEventListener('click', showRandomQuote)
renderQuotes()