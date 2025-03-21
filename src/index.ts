
import * as readlineSync from "readline-sync";
interface TOdoitem {
  item: string;
  completed: boolean;
}

interface todoitems {
  todo: TOdoitem[];
}

let items: todoitems = {
  todo: [{ item: "playing", completed: false }],
};

function listingitems(): void {
  let count: number = 1;
  console.log("Uncompleted Tasks:");
  items.todo.forEach((item) => {
    if (!item.completed) {
      console.log(`${count} - ${item.item}`);
      count += 1;
    }
  });
}

function addingitems(item: TOdoitem): void {
  items.todo.push(item);
}

function removing(item: TOdoitem): void {
  items.todo = items.todo.filter((item1) => item1.item !== item.item);
}

function edit(item1: TOdoitem, item2: TOdoitem): void {
  items.todo.forEach((item, index) => {
    if (item.item === item1.item) {
      items.todo[index] = item2;
    }
  });
}

let counter: number = 0;
while (counter !== 5) {
  const input1: string = readlineSync.question(`Please enter a number:
    1 - to see the tasks
    2 - to add a task
    3 - to remove a task
    4 - to update a task
    5 - to exit
  `);

  const num1: number = parseInt(input1, 10);

  if (num1 === 1) {
    listingitems();
    console.log("These are your uncompleted tasks.");
  } else if (num1 === 2) {
    const task: string = readlineSync.question("Enter the task: ");
    const newitem: TOdoitem = { item: task, completed: false };
    addingitems(newitem);
    console.log(" here are the uncompleted tasks with the new one")
    listingitems()
  } else if (num1 === 3) {
    listingitems();
    const taskid: string = readlineSync.question("Enter the id of the task: ");
    const deleteindex: number = parseInt(taskid, 10);
    const tobedeleted: TOdoitem = items.todo[deleteindex - 1];
    removing(tobedeleted);
    console.log("here are the uncompleted tasks excluding the deleted one")
    listingitems();
  } else if (num1 === 4) {
    listingitems();
    const taskid: string = readlineSync.question(
      "Enter the id of the task to be updated: "
    );
    const thetask: string = readlineSync.question("Enter the updated task: ");
    const updateindex: number = parseInt(taskid, 10);
    const tobeupdated: TOdoitem = items.todo[updateindex - 1];
    const updateitem: TOdoitem = { item: thetask, completed: false };
    edit(tobeupdated, updateitem);
    console.log(" here are the tasks that are with in the updated one ");
    listingitems();
  } else if (num1 === 5) {
    counter = 5;
    console.log("Exiting");
  }
}




// type Task = {
//     text: string;
//     done: boolean;
//   };

// let tasks:Task[] = [];
// // to do list
// function renderTasks() {
//     let taskList = document.getElementById("taskList") as HTMLUListElement || null ;
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         let li = document.createElement("li") as HTMLLIElement || null;
//       li.classList.add("task-item");
//         li.innerHTML = `<input type="checkbox" class="task-checkbox" onclick="toggleDone(${index})" ${task.done ? "checked" : ""}>
//                         <span class="task-text" ${task.done ? "style='text-decoration: line-through; color: gray;'" : ""}>${task.text}</span>
//                         <input type="text" class="edit-input" style="display:none;" value="${task.text}" onblur="saveEdit(this, ${index})">
//                         <div class="options-menu" style="display: none;">
//                             <button class="edit-btn" onclick="toggleEdit(this, ${index})"> Edit</button>
//                             <button class="delete-btn" onclick="deleteTask(${index})"> Delete</button>
//                         </div>`;
        
//         li?.addEventListener("click", function(event:Event) {
//             // here  we are refering it as event 
//             const target = event.target as HTMLElement ||null;
//             if (!target.classList.contains("task-checkbox")) {
//                 let menu = li.querySelector(".options-menu") as HTMLDListElement || null;
//                 menu.style.display = menu.style.display === "none" ? "block" : "none";
//             }
//         });
        
//         taskList.appendChild(li);
//     });
// }

// function addTask() {
//     let input = document.getElementById("taskInput") as HTMLInputElement||null;
//     let taskText = input?.value.trim();
//     if (taskText === "") return;
    
//     tasks.push({ text: taskText, done: false });
//     input.value = "";
//     renderTasks();
// }

// function toggleEdit(button:HTMLButtonElement) {
//     let li = button.closest("li") as HTMLLIElement;
//     let span = li.querySelector(".task-text") as HTMLLIElement || null;
//     let input = li.querySelector(".edit-input") as HTMLInputElement|| null;
    
//     if (input.style.display === "none") {
//         input.style.display = "inline-block";
//         span.style.display = "none";
//         input.focus();
//     } else {
//         input.style.display = "none";
//         span.style.display = "inline";
//     }
// }

// function saveEdit(input: HTMLInputElement, index:number) {
//     tasks[index].text = input.value.trim();
//     renderTasks();
// }

// function deleteTask(index:number) {
//     tasks.splice(index, 1);
//     renderTasks();
// }

// function toggleDone(index:number) {
//     tasks[index].done = !tasks[index].done;
//     renderTasks();


// }
