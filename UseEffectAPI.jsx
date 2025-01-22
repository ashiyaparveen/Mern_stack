import { useEffect, useState } from "react";
import axios from 'axios';
const UseEffectApi = () => {
    var [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => { setPost(res.data); })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <h2>This is page meant for using effect with API.</h2>
            <h3>The contents inside my JSONPlaceholder API post are </h3>
            <ul style={{ listStyleType: "decimal" }}>
                {posts.map((post) => (
                    <li key={post.UserId}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}
export default UseEffectApi;