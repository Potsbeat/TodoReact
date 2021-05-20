import "./Inputs.css";

function Inputs({tarea_input, materia_input, addTask}){

    function selectAll(){
        materia_input.current.select();
    }

    return (
    <div className="container">
        <hr/>
        <form onSubmit={addTask}>
        <section className="form-container">
            <input ref={materia_input} 
                    onFocus={selectAll} type="text"
                    placeholder="Materia" />

            <input ref={tarea_input} type="text"
                    placeholder="Tarea" />

            <button className="btn-add" type="submit" >+</button>
        </section>
        <hr/>
        </form>
        
    </div>
    );
}

export default Inputs;