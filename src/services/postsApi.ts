// type Post = {

// }

const PostsApi =  {
    getPosts: () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
    },

    getPostById: (id: number) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
    },

    getTasks: async() => {
        return fetch('http://localhost:8080/tasks')
            .then(response => response.json())
    },

    getTaskById: async(id: number) => {
        return fetch(`http://localhost:8080/tasks/${id}`)
            .then(response => response.json())
    }
}
export default PostsApi