<script>
    import Index from './components/IndexPage.vue';
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';

    export default {
        name: 'App',
        components: {
            Index,
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<template>
    <HeaderComponent />
    <Index />
    <FooterComponent />
</template>
