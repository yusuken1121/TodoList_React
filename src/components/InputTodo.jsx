export const InputTodos = (props) => {
    const {todoText, onChange, onClick} = props
    return(
        <div className='input-area'>
            <input placeholder="Enter what you have to do" type="text" value={todoText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
        </div>
    )

}