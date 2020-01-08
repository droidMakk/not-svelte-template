import SignalNoise from './signalnoise.svelte';

export default {
    title: 'Text Animations'
}

export const signalNoise = () => ({
    Component: SignalNoise,
    props: { test: "Checkout" }
})