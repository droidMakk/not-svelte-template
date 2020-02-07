import GoogleLogin from './googlelogin.svelte';

export default {
    title: 'Buttons'
}

export const googleLogin = () => ({
    Component: GoogleLogin
})

googleLogin.story = {
    title: 'Google login button'
}