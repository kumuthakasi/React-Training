
export const fetchPosts = () => {
    const promise = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
    return {
        type: 'FETCH_POSTS',
        payload: promise
    }
}