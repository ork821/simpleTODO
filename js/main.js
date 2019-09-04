window.addEventListener('load', () => {
    const todo_field = document.getElementById('todo_field');
    const inputElement = document.getElementsByClassName('form-control')[0];
    let inputText = '';

    const addTask = () => {
        let to_do = document.createElement('li');
        to_do.classList.add('alert', 'alert-primary', 'todo');
        to_do.innerHTML = `
            <div class="text">${inputText}</div>
            <button type="button" class="btn btn-danger delete">&#10008;</button>`
        todo_field.append(to_do);
    }

    inputElement.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            inputText = inputElement.value;
            inputElement.value = '';
            addTask();
        }
    });

    todo_field.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) { // если нажали на кнопку удалить, то элемент удаляется
            e.target.parentElement.remove();
        }

        // если нажали чисто на текст, а не на <li>, то текст зачеркивается, либо становится нормальным
        if (e.target.classList.contains('line-through') && !e.target.classList.contains('todo')) {
            e.target.classList.remove('line-through');
        } else if (!e.target.classList.contains('line-through') && !e.target.classList.contains('todo')) {
            e.target.classList.add('line-through');
        }


    });


});