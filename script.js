const textElement = document.getElementById('text');
const changeTextBtn = document.getElementById('change-text-btn');
const styleTextBtn = document.getElementById('style-text-btn');
const colorBox = document.getElementById('color-box');
const fruitsList = document.getElementById('fruits-list');
const toggleFruitsBtn = document.getElementById('toggle-fruits-btn');
const addFruitBtn = document.getElementById('add-fruit-btn');
const removeFruitBtn = document.getElementById('remove-fruit-btn');

// Change Text Content
changeTextBtn.addEventListener('click', () => {
    const messages = [
        "DOM manipulation is awesome.",
        "JavaScript brings websites to life.",
        "The HTML <script> tag is used to define a client-side script (JavaScript).",
        "To select an HTML element, JavaScript most often uses the document.getElementById() method.",
        "Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    textElement.textContent = messages[randomIndex];
});

// Style Text
styleTextBtn.addEventListener('click', () => {
    const colors = ['blue', 'black', 'red', 'yellow', 'maron'];
    const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Times New Romans'];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    
    textElement.style.color = randomColor;
    textElement.style.fontFamily = randomFont;
    textElement.style.fontSize = `${Math.random() * 10 + 14}px`;
    textElement.style.fontWeight = Math.random() > 0.5 ? 'bold' : 'normal';
});

// Toggle Fruits List
toggleFruitsBtn.addEventListener('click', () => {
    fruitsList.style.display = fruitsList.style.display === 'none' ? 'block' : 'none';
    toggleFruitsBtn.textContent = 
        fruitsList.style.display === 'none' ? 'Show Fruits' : 'Hide Fruits';
});

// Add Random Fruit
addFruitBtn.addEventListener('click', () => {
    const fruits = [
        'Strawberry', 'Blueberry', 'Watermelon', 
        'Orange', 'Grapes', 'Blueberries', 'Peach', 'Cherry'
    ];
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    
    const li = document.createElement('li');
    li.textContent = randomFruit;
    fruitsList.appendChild(li);
});

// Remove Last Fruit
removeFruitBtn.addEventListener('click', () => {
    if (fruitsList.children.length > 0) {
        fruitsList.removeChild(fruitsList.lastElementChild);
    } else {
        alert('No more fruits to remove!');
    }
});