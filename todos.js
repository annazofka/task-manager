const addNewTask = document.querySelector('#add')
const choosePriority = document.querySelector('#choose-priority')
const list = document.querySelector('#task-list')

const generateTemplate = task => {
	const html = `
    <li class="table-row__task-list">
    <p class="table-row__task-list__task-name">${task}</p>
    <p class="table-row__task-list__priority"></p>
	<p class="table-row__task-list__done"></p>
    <i class="fa-solid fa-trash delete" style="color: #1d1d1b"></i>

</li>
    `
	list.innerHTML += html
}

// add tasks
addNewTask.addEventListener('submit', event => {
	event.preventDefault()

	const task = addNewTask.newTask.value.trim()
	if (task.length) {
		generateTemplate(task)
		addNewTask.reset()
	}
})

// select priority
choosePriority.addEventListener('click', event => {
	for (const priority of choosePriority) {
		if (priority.matches('.choose-priority__high')) {
			console.log('priority should be high but how?')
		}
	}
	// const priority = choosePriority.event.target
	// alert('button clicked')
})

// delete tasks
list.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		event.target.parentElement.remove()
	}
})
