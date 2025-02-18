import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../types";
import PostsApi from "../services/postsApi";
import Card from "../components/Card";
import Task from "../components/Task";

const RoutesDynamique = () => {
    const [post, setPost] = useState<Post>({})
    const [task, setTask] = useState<Task>({} as Task)
    const { id } = useParams<{id: string}>()
    useEffect(() => {
        // PostsApi.getPostById(Number(id)).then((data: SetStateAction<Post>) => setPost(data))
        PostsApi.getTaskById(Number(id)).then((data: SetStateAction<Task>) => setTask(data))
    }, [id])
    console.log(task)
    return (
        <>
            <p className="text-2xl">Dynamic route number {id}</p>
            {/* <Card key={post.id} {...post} />
              */}
            {Object.keys(task).length === 0 ? <p>Task not found</p> : <Task key={task.id} {...task} />}
            {/* <Task key={task.id} {...task} /> */}
        </>
    )
}

export default RoutesDynamique;