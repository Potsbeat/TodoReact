
import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Tarea from './components/Tarea';
import Inputs from './components/Inputs'
function App() {
  
  let [lista, setLista] = useState([]);
  let tarea_input = useRef();
  let materia_input = useRef();

  function addTask(evn){
    evn.preventDefault();

    let tarea_value = tarea_input.current.value;
    let materia_value = materia_input.current.value;

    if(tarea_value==='' || materia_value===''){
      return;
    }

    setLista([
      {
        id: nanoid(4),
        tarea: tarea_value, 
        materia: materia_value,
        hecha: false
      },...lista]);

    tarea_input.current.value = '';
    materia_input.current.focus();
  }

  function delTask(id){
    setLista(
      lista.filter(
        task => task.id !== id
      )
    );
  }

  function markAsDone(id){
    let element = lista.find(task => task.id === id);
    let tmp = [...lista];
    tmp.splice(tmp.indexOf(element),1);

    if(element.hecha){
      element.hecha = false;
      setLista([element,...tmp]);
      return;
    }
    element.hecha = true;
    setLista([...tmp,element]);
  }

  console.log(lista);

  return (
    <>
      
      <Inputs tarea_input={tarea_input} 
              materia_input={materia_input} 
              addTask={addTask}
               />
      
      {lista.map(
        ({id,tarea,materia}) => 
          <Tarea key={id}
                 id={id}
                 tarea={tarea} 
                 materia={materia} 
                 delTask={delTask}
                 markAsDone={markAsDone} />
      )}
      
    </>
  );
}

export default App;
