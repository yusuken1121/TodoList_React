export const IncompleteTodos = (props) =>{
    const {incomplete,onClickComplete,onClickDelete} = props
    return (
        <div className='incomplete-area'>
            <p className='title'>Incomplete tasks</p>
            <ul>
                {incomplete.map((todo,index)=>{
                return(
                    <li key={todo}>
                        <div className='list-row'>
                            <p className='todo-item'>{todo}</p>
                            <button onClick={() => onClickComplete(index)}>Complete</button>
                            <button onClick={() => onClickDelete(index)}>Delete</button>
                        </div>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}