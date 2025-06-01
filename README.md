React Todo App (Context API + localStorage)
A simple, responsive Todo application built with React, Context API, and Tailwind CSS. All todos persist in the browser’s localStorage, allowing you to add, edit, complete, and delete tasks—even after page refresh.

Table of Contents
Project Overview

Features

Tech Stack

Folder Structure

Installation & Setup

Prerequisites

Clone & Install

Running in Development

Building for Production

How It Works

Context API

localStorage Integration

Tailwind CSS Styling

Usage

Contributing

License

Project Overview
This repository contains a Todo application demonstrating:

Modern React patterns (functional components, hooks, Context API).

State management with Context: all todo state and update functions live in a single provider.

Persistent storage: todos are automatically saved to and loaded from the browser’s localStorage.

Tailwind CSS: lightweight utility-first styling for rapid UI development.

Whether you’re learning React Context or building a quick prototype, this project serves as a foundation for managing global state and local persistence.

Features
Add Todo: Create new tasks with a single input field.

Edit Todo: Click an edit icon to modify an existing task’s text.

Toggle Complete: Mark tasks as complete/incomplete with a checkbox.

Delete Todo: Remove tasks individually.

Persistent Data: All changes are saved to localStorage and reloaded on refresh.

Responsive UI: Mobile-friendly layout with simple Tailwind styling.

Tech Stack
React (v18+) – Core UI framework

Context API – Global state management without Redux

localStorage – Browser-side persistence for todos

Tailwind CSS – Utility-first CSS framework for styling

Create React App – Boilerplate and build tooling

Folder Structure
graphql
Copy
Edit
my-todo-app/
├── node_modules/              # Project dependencies (ignored in Git)
├── public/
│   ├── index.html             # HTML template
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── TodoForm.js        # Form component to add new todos
│   │   └── TodoItem.js        # Individual todo item (edit/toggle/delete)
│   ├── context/
│   │   └── TodoContext.js     # Context provider + custom hook (useTodo)
│   ├── App.js                 # Main application component
│   ├── index.js               # ReactDOM render entry point
│   └── index.css              # Global styles (imports Tailwind)
├── .gitignore                 # Files/folders to ignore in Git
├── package.json               # Dependencies, scripts, metadata
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # This file
Installation & Setup
Prerequisites
Node.js (v14 or newer) and npm (v6+) installed. Verify with:
node -v
npm -v

Git installed locally to clone/pull/fork the repository.

Clone & Install
Clone the repo:
git clone https://github.com/your-username/react-todo-context.git
cd react-todo-context

Install dependencies:
npm install
or, if you use Yarn:
yarn install

Running in Development
To start a development server with hot-reload:

npm start

The app will launch at http://localhost:3000.

Edit files in src/ and see updates automatically.

Building for Production
When you’re ready to create an optimized production build:

npm run build

Creates a build/ folder containing minified, production-ready files.

Deploy the contents of build/ to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

How It Works
Context API
TodoContext.js exports three things:

TodoContext – The React context object.

TodoProviderWrapper – A provider component that holds all todo state and functions.

useTodo – A custom hook for consuming context in child components.

Inside TodoProviderWrapper:

State Initialization
const [todos, setTodos] = useState([]);
– Starts with an empty array (or loads from localStorage on mount).

CRUD Functions

addTodo({ todo, completed: false })

updateTodo(id, { todo: newText })

toggleCompleteTodo(id)

removeTodo(id)

Provider Value
<TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo, toggleCompleteTodo }}>
{children}
</TodoContext.Provider>

Child components (e.g., TodoForm.js and TodoItem.js) call const { addTodo, updateTodo, … } = useTodo() to read and modify the same shared state.

localStorage Integration
On Mount

javascript
Copy
Edit
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('todos'));
  if (Array.isArray(stored)) {
    setTodos(stored);
  }
}, []);
– Runs once when the provider mounts. If todos exist in localStorage, load them into state.

On State Change

javascript
Copy
Edit
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
– Every time todos updates, save the new array into localStorage. This ensures persistence across refreshes.

Tailwind CSS Styling
Tailwind is configured via tailwind.config.js and imported in index.css.

Utility classes (e.g., bg-[#172842], rounded-lg, px-3, py-1) provide rapid styling without writing custom CSS.

Responsive layout and simple color schemes help keep the UI clean and mobile-friendly.

Usage
Add a Todo

Type a task into the input field at the top and click Add.

The new item appears below, and localStorage updates automatically.

Edit a Todo

Click the ✏️ (edit) button next to any incomplete task.

Modify the text in the input, then click 💾 (save).

The edited text is saved to state and localStorage.

Toggle Complete

Click the checkbox beside a task to mark it “completed.”

Completed tasks show a light green background and a line-through.

You cannot edit a completed task; you must uncheck it first to re-enable editing.

Delete a Todo

Click the ❌ button to remove a task entirely.

It disappears from state and is removed from localStorage.

All actions happen instantly in the UI, and the app maintains data across page reloads thanks to localStorage.

Contributing
Contributions, issues, and feature requests are welcome!

Fork the repository.

Create a new branch:
git checkout -b feature/your-feature-name

Make your changes and commit:
git add .
git commit -m "Add feature: [describe]"

Push to your fork:
git push origin feature/your-feature-name

Open a Pull Request on GitHub, describing what you’ve changed and why.

License
This project is open-source and available under the MIT License.