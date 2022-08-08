import { BContainer } from "bootstrap-vue";
import Card from "./Card";

export default {
  name: "Carousel",
  props: {
    projects: null,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    left() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.projects.length - 1;
      }
    },
    right() {
      this.currentIndex++;
      if (this.currentIndex > this.projects.length - 1) {
        this.currentIndex = 0;
      }
    },
  },
  render() {
    return (
      <BContainer>
        <BRow>
          {/* Go Left */}
          <BCol cols="1">
            <BButton
              on-click={() => {
                this.left();
              }}
            >
              <i class="fa-solid fa-angle-left"></i>
            </BButton>
          </BCol>

          {/* Card */}
          <BCol cols="10">
            <Card project={this.projects[this.currentIndex]} />
          </BCol>

          {/* Go Right */}
          <BCol cols="1">
            <BButton
              on-click={() => {
                this.right();
              }}
            >
              <i class="fa-solid fa-angle-right"></i>
            </BButton>
          </BCol>
        </BRow>
      </BContainer>
    );
  },
};
