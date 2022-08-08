export default {
  name: "Card",
  props: {
    project: null,
  },
  render() {
    return (
      <BCard title={this.project.name}>
        <BCardText>{this.project.description}</BCardText>
      </BCard>
    );
  },
};
