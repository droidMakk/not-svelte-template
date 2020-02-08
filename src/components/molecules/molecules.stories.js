import Comments from './comments.svelte';
import TabBar from './tabbar.svelte';

export default {
    title: "Molecules"
}

export const comments = () => ({
    Component: Comments,
    name: "Comments"
})

export const tabBar = () => ({
    Component: TabBar,
    name: "Tab bar"
})