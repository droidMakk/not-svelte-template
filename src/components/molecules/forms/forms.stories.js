import GreenTreeLogin from './greentreelogin.svelte';
import FlatBlueLogin from './flatbluelogin.svelte';

export default {
    title: 'Login Form'
}

export const greenTreeLogin = () => ({
    Component: GreenTreeLogin
})

greenTreeLogin.story = {
    title: 'Green Tree'
}

export const flatBlueLogin = () => ({
    Component: FlatBlueLogin
})

flatBlueLogin.story = {
    title: 'Flat Blue'
}