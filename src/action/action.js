
export const fetchPosts = () => async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
    dispatch({
        type: 'FETCH_POSTS',
        payload: response
    })

}