import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { TodosPage } from './pages/TodosPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

// ============================================================================================================================================================================================

// import React, { useEffect, useState } from 'react'
// import { Navbar } from './components/Navbar'
// import { TodoForm } from './components/TodoForm'
// import { TodoList } from './components/TodoList'
// import { ITodo } from './interfaces'

// declare var confirm: (question: string) => boolean

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<ITodo[]>([])

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('todos') || '[]' ) as ITodo[]
//     setTodos(saved)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }, [todos])

//   const addHandler = (title: string) => {
//     const newTodo: ITodo = {
//       title: title,
//       id: Date.now(),
//       completed: false
//     }
//     // setTodos([newTodo, ...todos])
//     setTodos(prev => [newTodo, ...prev])
//   }

//   const toggleHandler = (id: number) => {
//     setTodos(prev =>
//       prev.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//     )
//   }

//   const removeHandler = (id: number) => {
//     const shouldRemove = window.confirm('Are you sure that you want to remove this todo?')
    
//     if (shouldRemove) {
//       setTodos(prev => prev.filter(todo => todo.id !== id))
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <TodoForm onAdd={addHandler} />
//         <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
//       </div>
//     </>
//   )
// }

// export default App
