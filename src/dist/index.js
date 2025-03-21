"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
let items = {
    todo: [{ item: "playing", completed: false }],
};
function listingitems() {
    let count = 1;
    console.log("Uncompleted Tasks:");
    items.todo.forEach((item) => {
        if (!item.completed) {
            console.log(`${count} - ${item.item}`);
            count += 1;
        }
    });
}
function addingitems(item) {
    items.todo.push(item);
}
function removing(item) {
    items.todo = items.todo.filter((item1) => item1.item !== item.item);
}
function edit(item1, item2) {
    items.todo.forEach((item, index) => {
        if (item.item === item1.item) {
            items.todo[index] = item2;
        }
    });
}
let counter = 0;
while (counter !== 5) {
    const input1 = readlineSync.question(`Please enter a number:
    1 - to see the tasks
    2 - to add a task
    3 - to remove a task
    4 - to update a task
    5 - to exit
  `);
    const num1 = parseInt(input1, 10);
    if (num1 === 1) {
        listingitems();
        console.log("These are your uncompleted tasks.");
    }
    else if (num1 === 2) {
        const task = readlineSync.question("Enter the task: ");
        const newitem = { item: task, completed: false };
        addingitems(newitem);
        console.log(" here are the uncompleted tasks with the new one");
        listingitems();
    }
    else if (num1 === 3) {
        listingitems();
        const taskid = readlineSync.question("Enter the id of the task: ");
        const deleteindex = parseInt(taskid, 10);
        const tobedeleted = items.todo[deleteindex - 1];
        removing(tobedeleted);
        console.log("here are the uncompleted tasks excluding the deleted one");
        listingitems();
    }
    else if (num1 === 4) {
        listingitems();
        const taskid = readlineSync.question("Enter the id of the task to be updated: ");
        const thetask = readlineSync.question("Enter the updated task: ");
        const updateindex = parseInt(taskid, 10);
        const tobeupdated = items.todo[updateindex - 1];
        const updateitem = { item: thetask, completed: false };
        edit(tobeupdated, updateitem);
        console.log(" here are the tasks that are with in the updated one ");
        listingitems();
    }
    else if (num1 === 5) {
        counter = 5;
        console.log("Exiting");
    }
}
