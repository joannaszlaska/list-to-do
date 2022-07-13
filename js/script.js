{
    const tasks = [
        {
            content: "zrobić trening",
            done: false,
        },

        {
            content: "zjeść kolację",
            done: true,
        },
    ]
    
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
        render();
    };

    const removeTasks = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButtons, index) => {
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

    const render = () => {
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

        bindEvents();
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