import Header from "./components/HeaderComponent.js";
import Index from "./components/IndexPage.js";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchInformation");
  },
  methods: {},
  computed: {},
  render() {
    return (
      <div>
        <Header />
        <Index />
      </div>
    );
  },
};
