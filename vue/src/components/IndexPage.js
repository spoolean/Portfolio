import Projects from './ProjectsCard.js'
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
            this.projects = null;
            this.loading = true;

            fetch(`${window.location.origin}/projects`)
                .then(r => {
                    if (!r.ok) {
                        throw new Error(r.statusText);
                    }
                    return r.json();
                }).then(data => { this.projects = data; })
                .catch(error => { console.log(error); })
                
        }
    },
    render() {
        return (
            <div class="container">
                <h1>About</h1>
                <h1>Projects</h1>
                {this.widthSmall ? <Carousel /> : <Projects projects={ this.projects} />}
            </div>
        );
    }
}
