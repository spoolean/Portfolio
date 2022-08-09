import { BRow } from "bootstrap-vue";
import Card from "./Card";

export default {
  name: "Cards",
  data() {
    return {
      currentIndex: 1,
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  render() {
    return (
      <div>
        <BRow>
          {this.projects != null &&
            this.projects.map((project) => {
              if (project != null) {
                this.currentIndex++;
                return (
                  <BCol>
                    <Card
                      project={project}
                      on-openModal={this.$emit("openModal")}
                    />
                  </BCol>
                );
              }
              if (this.currentIndex % 3 === 0) {
                alert("3");
                return <BRow />;
              }
            })}
        </BRow>
      </div>
    );
  },
};
