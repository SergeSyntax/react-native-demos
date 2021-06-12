import createDataContext, {
  ActionCreatorWrapper,
  Reducer,
} from './createDataContext';

import jsonServer from '../api/jsonServer';

type State = {id: number; title: string}[];

const initialState: State[] = [];

const reducer: Reducer<State> = (state, {type, payload}) => {
  switch (type) {
    case 'GET_BLOG_POST':
      return payload;
    case 'EDIT_BLOG_POST':
      return state.map(blog => (blog.id === payload.id ? payload : blog));

    case 'DELETE_BLOG_POST':
      return state.filter(blogPost => blogPost.id !== payload);
    default:
      return state;
  }
};

const addBlogPost: ActionCreatorWrapper =
  dispatch => async (title, content, callback) => {
    const {data} = await jsonServer.post('/blogposts', {title, content});
    console.log(data);
    callback();
  };

const editBlogPost: ActionCreatorWrapper =
  dispatch => async (id, title, content, callback) => {
    const {data} = await jsonServer.put(`/blogposts/${id}`, {title, content});

    dispatch({type: 'EDIT_BLOG_POST', payload: data});
    callback();
  };

const deleteBlogPost: ActionCreatorWrapper = dispatch => async id => {
  await jsonServer.delete(`/blogposts/${id}`);

  dispatch({type: 'DELETE_BLOG_POST', payload: id});
};
const getBlogPosts: ActionCreatorWrapper = dispatch => async () => {
  const {data} = await jsonServer.get('/blogposts');
  dispatch({type: 'GET_BLOG_POST', payload: data});
};

export const {Context, Provider} = createDataContext(
  reducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  initialState,
);
