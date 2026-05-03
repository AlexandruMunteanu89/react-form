import { use, useState } from 'react'

function Articles() {
    const listaIniziale = [
        "Citroën",
        "Peugeout",
        "Opel"
    ]
    const [tasks, setTasks] = useState(listaIniziale)
    const [newTask, setNewTask] = useState("")
    //console.log(newTask);
function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted');

    console.log(newTask);
    //listaIniziale.push(newTask)
    console.log(listaIniziale); 
    setTasks([...tasks, newTask]);
    setNewTask("")
  }

// Creato la funzione per aggiungere la possibilità di cancellare ciascun articolo
function removeBtn (index) {
    const newTaskList = tasks.filter((element, i) => {
      return index !== i;
    })
    setTasks(newTaskList);
  }


  return (
    <>      
        <div className='container'>
            <h1>La lista di articoli</h1>
            <div className='card card-style'>
            <form className='list-style' onSubmit={handleSubmit}>
                <input type="text" className='form-style add-form' value={newTask} onChange={e => setNewTask(e.target.value)} placeholder='Aggiungi un nuovo articolo' />
                <button className='btn btn-success autline add-form'>Add</button>
            </form>
            </div>
            
            <div className='card-style'>
                <ul className="list-group">
                    {tasks.map((task, i) => (
                    <li className="list-group-item list-style" key={`${i}-task`}>{task} <button className='btn btn-danger' onClick={() => {removeBtn(i) }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button></li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Articles