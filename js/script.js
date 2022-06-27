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

    const render = () => {
     let htmlString = "";

     for(const task of tasks) {
        htmlString += `
        <button class="js-done">zrobione</button>
        <li class="list__item list__item--done" ${task.done ? "list__item--done" : "" }>
        ${task.content}
        <button class="js-remove">usuń</button>
        </li> `
        ;

     }
     document.querySelector(".js-tasks").innerHTML = htmlString;

     const removeButtons = document.querySelectorAll(".js-remove");
    
     removeButtons.forEach((removeButtons, index) => {
        removeButtons.addEventListener("click", () => {
            tasks.splice(index, 1);
            render();
        })
     })
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
    render();
    };

    const onFormSubmit =
        (event) => {
            event.preventDefault(); 

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }
            addNewTask(newTaskContent);

        };
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        
        form.addEventListener("submit", onFormSubmit)
    }
    init();
}