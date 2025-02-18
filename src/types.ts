type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

export default Post;
// export type { Task };
export default Task;