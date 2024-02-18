export const CompleteTodos = (props) => {
    const {complete, onClickRestore} = props
    return(
        <div className='complete-area'>
            <p className='title'>Completed tasks</p>
            <ul>
                {complete.map((todo,index)=>{
                return(
                    <li key={todo}>
                        <div className='list-row'>
                            <p className='todo-item'>{todo}</p>
                            <button onClick={()=>{onClickRestore(index)}}>Restore</button>
                        </div>
                    </li>
                )
                })}  
            </ul>
        </div>
    )    

}