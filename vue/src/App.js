import Header from "./components/HeaderComponent.js";
import Index from "./components/IndexPage.js";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      information: null,
    };
  },
  methods: {
    fetchInformation() {
      this.information = null;

      fetch(`${window.location.origin}/information`)
        .then((r) => {
          if (!r.ok) {
            throw new Error(r.statusText);
          }
          return r.json();
        })
        .then((data) => {
          console.log(data);
          this.information = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchInformation();
  },
  computed: {},
  render() {
    return (
      <div>
        <Header information={this.information} />
        <Index information={this.information} />
        {/* This is the pages navigation bar so users can move about the application*/}
        {/*<BRow class="justify-content-around m-1 text-center">*/}
        {/*    <BCol class="col-sm-2"><BRow><BButton on-click={() => { this.$store.dispatch("backward"); }}><BIcon icon="arrow-left"></BIcon></BButton></BRow></BCol>*/}
        {/*    <BCol class="col-sm-2 ml-auto"><BRow><BButton on-click={() => { this.$store.dispatch("forward"); }}><BIcon icon="arrow-right"></BIcon></BButton></BRow></BCol>*/}
        {/*</BRow>*/}

        {/* Dynamically render each page/component based off the page number */}
        {/*{this.$store.state.activePage === 1 && <Consent />}*/}
        {/*{this.$store.state.activePage === 2 && <LanguageModel />}*/}
        {/*{this.$store.state.activePage === 3 && <ChatModel />}*/}
        {/*{this.$store.state.activePage === 4 && <Evaluation />}*/}
        {/*{this.$store.state.activePage === 5 && <Submit />}*/}
      </div>
    );
  },
};
