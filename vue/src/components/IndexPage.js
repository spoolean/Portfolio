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
  data() {
    return {
      width: null,
      widthSmall: false,
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    information() {
      return this.$store.state.information;
    },
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
  render() {
    return (
      <div class="container">
        <h2>About</h2>
        <p>{this.information.About}</p>
        <h2>Projects</h2>
        {this.widthSmall ? <Carousel /> : <Projects />}
        {this.$store.state.showModal && (
          <Modal project={this.$store.state.modalProject} />
        )}
      </div>
    );
  },
};
