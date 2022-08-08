import Card from "./Card";

export default {
  name: "Cards",
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  render() {
    return (
      <div>
        {this.projects != null &&
          this.projects.map((project) => {
            if (project != null) {
              this.currentIndex++;
              return <Card project={project} />;
            }
            if (this.currentIndex % 3 == 0) {
              return <br />;
            }
          })}
      </div>
    );
  },
};
