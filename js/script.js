{
    let tasks = [];
    let hideDoneTasks = false;
    
    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            {content: newTaskContent, done: false}
        ]
        render();
    };

    const removeTasks = (taskindex) => {
        tasks = [
            ...tasks.slice(0, taskindex),
            ...tasks.slice(taskindex + 1)
        ]

        render();
    }

    const toggleTaskDone = (taskindex) => {
        tasks = [
            ...tasks.slice(0,taskindex),

            {...tasks[taskindex], done: !tasks[taskindex].done,},
            
           ...tasks.slice(taskindex + 1),
    
        ];
       
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, taskindex) => {
            removeButtons.addEventListener("click", () => {
                removeTasks(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            })
        })
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
           
        <li class="task">
        <button class=" button button__done js-done">${task.done ? "✔" : ""}</button>
        <span class="task__content ${task.done ? "task__content--done" : ""}">
        ${task.content}
        </span>
        <button class=" button button__remove js-remove">🗑️</button>
        </li> 
        ` ;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

      

    };

    const renderButtons = () => {

    }; 
    
    const bindButtonsEvents = () => {};

    const render = () => {
    
        renderTasks();
        renderButtons();
        bindEvents();
        bindButtonsEvents();
    };

    const clearForm = () => {
        const formInput = document.querySelector(".js-newTask");
        formInput.value = "";

        formInput.focus();
    };

    const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }

            addNewTask(newTaskContent);
            clearForm();
        };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    }
    init();
}