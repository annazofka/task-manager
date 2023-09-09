const addNewTask = document.querySelector('#add')
const choosePriority = document.querySelector('#choose-priority')
const highPriorityButton = document.querySelector('#high')
const mediumPriorityButton = document.querySelector('#medium')
const lowPriorityButton = document.querySelector('#low')
const list = document.querySelector('#task-list')

let selectedPriority = 'High'

const generateTemplate = (task, priority) => {
	const html = `
    <p class="table-row__task-list__task-name">${task}</p>
    <p class="table-row__task-list__priority">${priority}</p>
	<p class="table-row__task-list__done">
		<input type="checkbox">
	</p>
	<p class="table-row__task-list__delete">
		<i class="fa-solid fa-trash delete" style="color: #1d1d1b">
		</i>
	</p>
`

	const liNode = document.createElement('li')
	liNode.classList.add('table-row__task-list')

	liNode.innerHTML = html
	list.appendChild(liNode)
}

// add tasks
addNewTask.addEventListener('submit', event => {
	event.preventDefault()

	const task = addNewTask.newTask.value.trim()
	if (task.length) {
		generateTemplate(task, selectedPriority)
		addNewTask.reset()
		selectedPriority = 'High'
		highPriorityButton.classList?.remove('priority__high__red')
		mediumPriorityButton?.classList.remove('priority__medium__yellow')
		lowPriorityButton?.classList.remove('priority__low__green')
	}
})

// select priority
choosePriority.addEventListener('click', event => {
	if (event.target.id === 'high') {
		selectedPriority = 'High'
		highPriorityButton.classList.add('priority__high__red')
	} else if (event.target.id === 'medium') {
		selectedPriority = 'Medium'
		mediumPriorityButton.classList.add('priority__medium__yellow')
	} else if (event.target.id === 'low') {
		selectedPriority = 'Low'
		lowPriorityButton.classList.add('priority__low__green')
	}
})

// delete tasks
list.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		event.target.parentElement.parentElement.remove()
	}
})

// pagination
// to be added later
