export default {
  name: "Header",
  computed: {
    information() {
      return this.$store.state.information;
    },
  },
  render() {
    return (
      <BRow>
        <BCol cols="4" order="2">
          <h1>James Roche</h1>
        </BCol>
        <BCol cols="4" order="1">
          {this.information.Email}
        </BCol>
        <BCol cols="2" order="3">
          <a
            target="_blank"
            class="fa-brands fa-linkedin"
            href={this.information.Linkedin}
          ></a>
        </BCol>
        <BCol cols="2" order="4">
          {this.information.Github}
        </BCol>
      </BRow>
    );
  },
};
