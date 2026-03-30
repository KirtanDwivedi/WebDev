const addBtn = document.getElementById('add');
const inputField = document.getElementById('txt');
const bookmarkList = document.getElementById('bookmark-list');

addBtn.addEventListener('click', function () {
    const text = inputField.value.trim();
    if (text === "") {
        alert("Please enter something!");
        return;
    }

    addBookmark(text);
    inputField.value = ""; // Clear input
});

// Also allow adding with Enter key
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

const deleteAllBtn = document.getElementById('delete-all');
deleteAllBtn.addEventListener('click', function () {
    if (confirm("Are you sure you want to delete all bookmarks?")) {
        bookmarkList.innerHTML = "";
    }
});

function addBookmark(text) {
    const li = document.createElement('li');
    li.className = 'bookmark-item';

    // Check if text is a URL
    let content = text;
    if (text.startsWith('http://') || text.startsWith('https://') || text.includes('.com')) {
        const url = text.startsWith('http') ? text : 'https://' + text;
        content = `<a href="${url}" target="_blank">${text}</a>`;
    }

    li.innerHTML = `
        <div class="item-content">
            <span>${content}</span>
            <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </div>
    `;

    bookmarkList.appendChild(li);
}

// alert,confirm invoke dialog box
// prompt invoke dialog box with input field