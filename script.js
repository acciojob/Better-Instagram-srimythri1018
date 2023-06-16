//your code here
// Get the draggable elements
const draggableElements = document.querySelectorAll('.image');

// Initialize variables
let dragStartIndex;
let draggedElement;

// Function to handle drag start event
function dragStart(event) {
  dragStartIndex = Number(this.dataset.index);
  draggedElement = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
  this.classList.add('selected');
}

// Function to handle drag over event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drag enter event
function dragEnter(event) {
  event.preventDefault();
  this.classList.add('selected');
}

// Function to handle drag leave event
function dragLeave() {
  this.classList.remove('selected');
}

// Function to handle drop event
function drop(event) {
  const dropIndex = Number(this.dataset.index);
  this.classList.remove('selected');

  // Swap the content (images) of the dragged and dropped elements
  const temp = draggedElement.innerHTML;
  draggedElement.innerHTML = this.innerHTML;
  this.innerHTML = temp;

  // Swap the data-index values of the dragged and dropped elements
  draggedElement.dataset.index = dropIndex;
  this.dataset.index = dragStartIndex;
}

// Add event listeners to draggable elements
draggableElements.forEach((element) => {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', drop);
});
