<script lang="js">
    import Projects from './ProjectsCard.vue'

    export default {
        components: {
            Projects
        },
        data() {
            return {
                width: document.documentElement.clientWidth,
                widthSmall : false,
                loading: false,
                projects: null
            };
        },
        created() {
            this.fetchData();
        },
        mounted() {
            window.addEventListener('resize', () => { this.width = document.documentElement.clientWidth; });
        },
        watch: {
            width() {
                if (this.width <= 579) {
                    this.widthSmall = true;
                }
                else {
                    this.widthSmall = false;
                }
            }
        },
        methods: {
            fetchData() {
                this.post = null;
                this.loading = true;

                fetch('weatherforecast')
                    .then(r => r.json())
                    .then(json => {
                        this.post = json;
                        this.loading = false;
                        return;
                    });
            }
        },
    }
</script>

<template>
    <div class="container">
        <h1>About</h1>
        <h1>Projects</h1>
        <div v-if="widthSmall" class="row g-3">
            <p>This is small one</p>
        </div>
        <!-- If small screen, then projects in carousel for easier viewing -->
        <div v-else>
            <Projects />
        </div>
    </div>
</template>