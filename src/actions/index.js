import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';
import stream from '../apis/stream';

export const fetchStream = () => async dispatch => {
    const response = await stream.get('/todos');
    dispatch({
        type: FETCH_STREAM, payload: response.data
    })
}