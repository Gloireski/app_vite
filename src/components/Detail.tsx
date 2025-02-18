import { useEffect, useState } from "react";
import postsApi from "../services/postsApi";
import Card from "./Card";
import Task from "./Task";
import Post from "../types";

const Detail = () => {  
    const [posts, setPosts] = useState<Post[]>([])
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //   .then(response => response.json())
        //   .then(data => setPosts(data))
        postsApi.getPosts().then(data => setPosts(data))
        postsApi.getTasks().then(data => setTasks(data))
      }, [])
    
    console.log(tasks)
    return (
        <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl">Detail Page</p>
            {/* { 
                posts.map((post) => (
                <Card key={post.id} {...post} /> 
                )) 
            } */}
            {
                tasks.map((task) => (
                    <Task key={task.id} {...task} />
                ))
            }
        </div>
    )
}

export default Detail;