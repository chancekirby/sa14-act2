const form = document.getElementById("input")
form.addEventListener("submit", () => {
    const inputTitle = document.getElementById("title")
    const inputDetails = document.getElementById("details")
    const tasks = document.getElementById("tasks")

    const task = document.createElement("div")
    task.classList.add("task")
    tasks.appendChild(task)
    
    
    const taskTitle =  document.createElement("h3")
    taskTitle.innerText = `${inputTitle.value}`

    const taskDetails = document.createElement("p")
    taskDetails.innerText = `${inputDetails.value}`

    const editButton = document.createElement("button")
    editButton.innerText = "Edit"
    editButton.type = "button"
    editButton.classList.add("edit-delete")

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.type = "button"
    deleteButton.classList.add("edit-delete")

    const elements = [taskTitle, taskDetails, editButton, deleteButton]

    for (i in elements) {
        task.appendChild(elements[i])
    }

    editButton.addEventListener("click", () => {
        taskTitle.setAttribute("contenteditable", true)
        taskTitle.classList.add("editable")
        
        taskDetails.setAttribute("contenteditable", true)
        taskDetails.classList.add("editable")
        
        const save = document.createElement("button")
        save.innerText = "save"
        save.classList.add("edit-delete")

        task.removeChild(editButton)
        task.removeChild(deleteButton)
        task.appendChild(save)
    

        save.addEventListener("click", () => {
            taskTitle.setAttribute("contenteditable", false)
            taskTitle.classList.remove("editable")
        
            taskDetails.setAttribute("contenteditable", false)
            taskDetails.classList.remove("editable")

            task.removeChild(save)
            task.appendChild(editButton)
            task.appendChild(deleteButton)
        })

    })

    deleteButton.addEventListener("click", () => {
        tasks.removeChild(task)
    })



})