function TodoController() {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	 // saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function (e) {
		e.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target

		//ADD IT TO THE ARRAY BELOW
		todosArr = todoService.getTodos()
		todosArr.push(form.todo.value)
		localstorage[todo]= JSON.stringify(mylist)

		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todosArr)
		drawTodos(todosArr)
		document.getElementById("todo-form").reset()
	}

	this.removeTodoFromForm = function removeTodoFromForm (todo) {
		todosArr = todoService.getTodos()
		todosArr.splice(todoArr.indexOf(todo),1)
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
				<h3>${todo}</h3>
				<button onclick="app.controllers.toDoController.removeTodoFromForm(event)">X</button>
			</div>
			`
		}
		element.innerHTML = template
	}
	drawTodos(todoService.getTodos())
}

// function get_todos() {
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if (todos_str !== null) {
//         todos = JSON.parse(todos_str); 
//     }
//     return todos;
// }
 
// function add() {
//     var task = document.getElementById('task').value;
 
//     var todos = get_todos();
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }
 
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
 
//     show();
 
//     return false;
// }
 
// function show() {
//     var todos = get_todos();
 
//     var html = '<ul>';
//     for(var i=0; i<todos.length; i++) {
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//     };
//     html += '</ul>';
 
//     document.getElementById('todos').innerHTML = html;
 
//     var buttons = document.getElementsByClassName('remove');
//     for (var i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', remove);
//     };
// }
 
// document.getElementById('add').addEventListener('click', add);
// show();




