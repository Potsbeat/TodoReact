import { useRef } from "react";
import "./Tarea.css";

function Tarea({id, tarea, materia, hecha, delTask, markAsDone}){
    let h3tarea = useRef();
    let tarea_row = useRef();

    function clickTarea(){
        markAsDone(id);
        tarea_row.current.classList.toggle("done");
    }

    return (
    <>
    <section className="container">
        <div className="tarea" ref={tarea_row}>
            <h3 className="short" onClick={clickTarea}>{materia}</h3>
            <h3 ref={h3tarea} className="long" onClick={clickTarea}>{tarea}</h3>
            <button className="btn-fill" onClick={()=>delTask(id)}>X</button>
        </div>    
    </section>
    </>
    );
}

export default Tarea;