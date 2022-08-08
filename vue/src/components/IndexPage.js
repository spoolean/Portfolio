import Projects from "./Projects/ProjectsCards.js";
import Carousel from "./Projects/ProjectsCarousel.js";
import Modal from "./Projects/ProjectsModal.js";

export default {
  name: "Index",
  components: {
    Projects,
    Carousel,
    Modal,
  },
  props: {
    information: null,
  },
  data() {
    return {
      width: null,
      widthSmall: false,
      loading: false,
      projects: null,
      showModal: false,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    // Event Listeners
    window.addEventListener("resize", () => {
      this.width = document.documentElement.clientWidth;
    });
    // Set width for small screens on load
    this.width = document.documentElement.clientWidth;
    this.widthSmall = this.width <= 579 ? true : false;
  },
  watch: {
    width() {
      this.widthSmall = this.width <= 579 ? true : false;
    },
  },
  methods: {
    fetchData() {
      this.projects = null;
      this.loading = true;

      fetch(`${window.location.origin}/projects`)
        .then((r) => {
          if (!r.ok) {
            throw new Error(r.statusText);
          }
          return r.json();
        })
        .then((data) => {
          this.projects = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  render() {
    return (
      <div class="container">
        <h1>About</h1>
        <p>{this.information.About}</p>
        <h1>Projects</h1>
        {this.widthSmall ? (
          <Carousel projects={this.projects} />
        ) : (
          <Projects projects={this.projects} />
        )}
        {this.showModal && <Modal />}
      </div>
    );
  },
};
