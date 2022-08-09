export default {
  name: "Card",
  props: {
    project: null,
  },
  render() {
    return (
      <BCard title={this.project.name}>
        <BCardText>{this.project.description}</BCardText>
        <BButton
          block
          on-click={() => {
            this.$store.dispatch("openModal", this.project);
          }}
        ></BButton>
      </BCard>
    );
  },
};
