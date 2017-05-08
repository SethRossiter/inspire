function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addToDoFromForm = function (e) {
		e.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target

		//ADD IT TO THE ARRAY BELOW
		todosArr = todoService.getTodos()
		todosArr.push(form.todo.value)

		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todosArr)
		drawTodos(todoService.getTodos())
	}

	this.removeToDoFromForm = function (todo) {
		todosArr = todoService.getTodos()
		todosArr.splice(todo)
		todoService.saveTodos(todosArr)
		drawTodos(todoService.getTodos())
	}
	function drawTodos(todos) {
		var element = document.getElementById('todo')
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todo[i]
			template += `
			<div class="content-todo">
				<h3>${todo}
				<button onclick="app.controllers.toDoController.removeTodoFromForm(event)"></button>
			</div>
			`
		}
		element.innerHTML = template
	}
	drawTodos(todoService.getTodos())
}






