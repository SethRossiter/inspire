function TodoController(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function(e) {
		e.preventDefault()
		// TAKE THE INFORMATION FROM THE FORM
		var form = e.target
		//ADD IT TO THE ARRAY BELOW
		todosArr = todoService.getTodos()
		todosArr.push(form.todo.value)
		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todosArr)	
		// 
		drawTodos(todosArr)
		document.getElementById("todo-form").reset()
    }

	this.removeTodoFromForm = function removeTodoFromForm(todo){

		todosArr = todoService.getTodos()
		// for(var i = 0; i < todosArr.length; i++){
		// 	todo = todoArr[i]
		// }
			
		todosArr.splice(todosArr.indexOf(todo),1)
		todoService.saveTodos(todosArr)
		drawTodos(todoService.getTodos())
	}

	
    function drawTodos(todos){

		var element = document.getElementById('todo')
		var template = ''
		for(var i = 0; i < todos.length; i++){

			todo = todos[i]
			template +=
			`
			<div class="content-todo">
				<h3>${todo}
				<button onclick="app.controllers.toDoController.removeTodoFromForm(event)">X</button>
			</div>		
						
			`
		}
		element.innerHTML = template
	}
    drawTodos(todoService.getTodos())
}


