import { BButton, BCol, BContainer, BLink, BRow } from "bootstrap-vue";

export default {
  name: "Header",
  computed: {
    information() {
      return this.$store.state.information;
    },
  },
  render() {
    return (
      <div class="navbar">
        <p class="h1 navbar-title">James Roche</p>
        <div class="navbar-links">
          <BLink href={"emailTo:" + this.information.email}>
            <i class="fa-solid fa-at fa-2xl"></i>
          </BLink>
          <BLink href={this.information.Linkedin} target="_blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </BLink>
          <BLink href={this.information.Github} target="_blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </BLink>
        </div>
      </div>
    );
  },
};
