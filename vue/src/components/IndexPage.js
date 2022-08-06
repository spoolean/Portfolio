import Projects from './ProjectsCard.vue'
import Carousel from './ProjectsCarousel.vue'

export default {
    components: {
        Projects,
        Carousel,
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
    render() {
        return (
            <div class="container">
                <h1>About</h1>
                <h1>Projects</h1>
                {this.widthSmall ? <Carousel /> : <Projects />}
            </div>
        );
    }
}
