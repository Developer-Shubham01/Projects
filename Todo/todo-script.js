let input = document.getElementById('input');
let add_btn = document.getElementById('add');
let list = document.getElementById('list');

add_btn.addEventListener('click', add_task);


//Add a new task in the list
function add_task() {
    let new_task = document.createElement('div');
    let input_value = input.value;
    new_task.innerHTML = `<h2>${input_value}</h2>
                <div id="features">
                    <button id="edit" onclick="edit_task()"><i class="fa-solid fa-pen"></i></button>
                    <button id="delete" onclick="delete_task()"><i class="fa-solid fa-trash"></i></button>
                </div>`
    new_task.setAttribute('id', 'task');
    list.append(new_task);
    input.value = "";
}

//Remove task
function delete_task() {
    document.activeElement.parentElement.parentElement.remove();
}

//edit task
function edit_task() {
    let old_value = document.activeElement.parentElement.parentElement.children[0];
    let edited_element = document.createElement('div');
    edited_element.innerHTML = `<input type="text" placeholder="Write Something..">
        <button>Done</button>`;
    edited_element.setAttribute('id', 'update_task');
    document.body.prepend(edited_element);
    let done_btn = edited_element.children[1];
    edited_element.children[0].value = old_value.textContent;
    done_btn.addEventListener('click', update);
    function update() {
        let new_value = edited_element.children[0].value;
        old_value.textContent = new_value;
        edited_element.remove();
    };
}