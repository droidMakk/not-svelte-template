import GreeTreeLogin from './greentree.svelte';
import FlatBlue from './flatblue.svelte';

export default {
    title: 'Sign In'
}

export const greenTree = () => ({
    Component: GreeTreeLogin,
    name: 'Green Tree'
})

export const flatBlue = () => ({
    Component: FlatBlue,
    name: 'Flat Blue'
})