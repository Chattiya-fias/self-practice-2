# Lesson 2: DOM Manipulation

# Objective

Students will practice manipulating the DOM with JavaScript by displaying and interacting with quotes.  
This lesson connects the logic from **quote.js** with the user interface in **index.html** using **ui.js**.

---

# Your Tasks

- Use `getAllQuotes()` to retrieve the current list of quotes.
- call `addNewQuote(content, author)` to add 3 initial quotes by calling `addQuote(content, author)` from **quote.js**.
  - addQuote('Stay hungry, stay foolish.', 'Steve Jobs')
  - addQuote('Do or do not. There is no try.', 'Yoda')
  - addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
- Write a function `renderQuotes()` that handles this process.
  - Clears the current contents of the quote list.
  - Loop through each quote and create a `<p>` element with the format: `"content" — author` to the `<div id="quote-list">`.
  - Each quote should include its content and author.
- Call `renderQuotes()` after adding initial quotes.
