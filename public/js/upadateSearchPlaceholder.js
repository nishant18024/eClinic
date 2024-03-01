let placeholders = ["Hello", "2", "3"]
let currentIndex = 0
function updatePlaceholder() {
    let placeholder = document.querySelector('#searchBox').placeholder = placeholders[currentIndex]
    currentIndex = (currentIndex + 1) % placeholders.length
}

setTimeout(updatePlaceholder, 1000)
