const addNewTask = document.querySelector('#add')
const choosePriority = document.querySelector('#choose-priority')
const highPriorityButton = document.querySelector('#high')
const mediumPriorityButton = document.querySelector('#medium')
const lowPriorityButton = document.querySelector('#low')
const list = document.querySelector('#task-list')

let selectedPriority = 'High'

// const tasks = [
// 	{ name: 'pouczyć się JSa', priority: 'high' },
// 	{ name: 'pouczyć się HTMLa', priority: 'low' },
// ]

const generateTemplate = (task, priority) => {
	// 	const html = `
	//     <li class="table-row__task-list">
	//     <p class="table-row__task-list__task-name">${task}</p>
	//     <p class="table-row__task-list__priority">${priority}</p>
	// 	<p class="table-row__task-list__done"></p>
	//     <i class="fa-solid fa-trash delete" style="color: #1d1d1b"></i>

	// </li>
	//     `

	const html = `
    <p class="table-row__task-list__task-name">${task}</p>
    <p class="table-row__task-list__priority">${priority}</p>
	<p class="table-row__task-list__done"></p>
    <i class="fa-solid fa-trash delete" style="color: #1d1d1b"></i>
`

	const liNode = document.createElement('li')
	liNode.classList.add('table-row__task-list')
	// list.innerHTML += html

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
choosePriority.addEventListener(
	'click',
	event => {
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

		console.log(event.target.id)
		// for (const priority of choosePriority) {
		// 	if (priority.matches('.choose-priority__high')) {
		// 		console.log('priority should be high but how?')
	}

	// const priority = choosePriority.event.target
	// alert('button clicked')
)

// delete tasks
list.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		event.target.parentElement.remove()
	}
})
