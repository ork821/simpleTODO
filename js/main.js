window.addEventListener('load', () => {
    const todo_field = document.getElementById('todo_field');
    const inputElement = document.getElementsByClassName('form-control')[0];
    let inputText = '';
    const btn = document.getElementsByClassName('.delete');



    const addTask = () => {
        let to_do = document.createElement('li');
        to_do.classList.add('alert', 'alert-primary', 'todo');
        to_do.innerHTML = `
            <div class="text">${inputText}</div>
            <button type="button" class="btn btn-danger delete">&#10008;</button>`
        todo_field.append(to_do);
    }

    const deleteTask = () => {
        console.log(todo_field.children);
    }


    inputElement.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            inputText = inputElement.value;
            inputElement.value = '';
            addTask();
        }
    });

    todo_field.addEventListener('click', (e) => {
       e.target.parentElement.remove();
    });






});