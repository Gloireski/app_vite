type Task = {
    id: number;
    title: string;
    isDone: string;
  }

const Task: React.FC<Task> = ({ id, title, isDone }) => {
    return (
        <div className="flex flex-col items-center justify-center
            bg-blue-200/10 p-4 m-4 rounded-lg shadow-lg
            w-96 hover:shadow-xl transition duration-500">
        <h2 className="text-2xl text-amber-900">{title}</h2>
        <p className="text-xl text-blue-300">{isDone}</p>
        </div>
    )
}

export default Task;