const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', startDrag)
fill.addEventListener('dragend', endDrag)

empties.forEach((empty) => {
  empty.addEventListener('dragenter', enterDrag)
  empty.addEventListener('dragleave', leaveDrag)
  empty.addEventListener('dragover', overDrag)
  empty.addEventListener('drop', dropDrag)
})

function startDrag() {
  this.className += ' hold'
  setTimeout(() => {
    this.className = ''
  }, 0)
}

function endDrag(e) {
  e.preventDefault()
  this.className = 'fill'
}
function enterDrag(e) {
  e.preventDefault()
  this.className += ' hovered'
}
function leaveDrag(e) {
  e.preventDefault()
  this.className = 'empty'
}
function overDrag(e) {
  e.preventDefault()
  this.className += ' over'
}
function dropDrag(e) {
  e.preventDefault()
  this.className = 'empty'
  this.append(fill)
}
