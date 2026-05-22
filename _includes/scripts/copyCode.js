// Select all code blocks
const codeBlocks = document.querySelectorAll('code') 

codeBlocks.forEach((block) => {
  block.addEventListener('click', async () => {
    try {
      // Use .innerText to get only the visible text content
      await navigator.clipboard.writeText(block.innerText) 
      alert('Code copied to clipboard!') 
    } catch (err) {
      console.error('Failed to copy: ', err) 
    }
  }) 
}) 
