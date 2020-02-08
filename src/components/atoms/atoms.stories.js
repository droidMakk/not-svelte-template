import SingleComment from './singlecomment.svelte';
import Loader from './loader.svelte';
import Empty from './empty.svelte';
import CommentField from './commentfield.svelte';


export default {
    title: 'Atoms'
}

export const singleComment = () => ({
    Component: SingleComment,
    name: 'Single Comment'
})

export const loaderImage = () => ({
    Component: Loader,
    name: 'Loader'
})

export const empty = () => ({
    Component: Empty,
    name: 'Empty Svelte'
})

export const commentField = () => ({
    Component: CommentField,
    name: "Comment Field"
})