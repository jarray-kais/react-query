const TodoCompleted = ({ completed }) => {
    console.log(completed);
    return (
        <div>
            <span className={`badge bg-${completed ? 'success' : 'danger'} rounded-5 border-1`}>
                &nbsp;
            </span>
        </div>
    );
}

export default TodoCompleted;