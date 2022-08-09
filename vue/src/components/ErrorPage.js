export default {
  name: "ErrorPage",
  data() {
    return {
      workingError: null,
    };
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    error() {
      this.workingError = this.error;
    },
  },
  methods: {
    error500() {
      if (this.error != null && this.error[0].status == 500) {
        return (
          <div>
            <h1>500</h1>
            <h2>Internal Server Error</h2>
            <p>
              The server encountered an unexpected condition which prevented it
              from fulfilling the request.
            </p>
          </div>
        );
      }
    },
    error404() {
      if (this.error != null && this.error[0].status == 404) {
        return (
          <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
              The requested URL was not found on the server. If you entered the
              URL manually please check your spelling and try again.
            </p>
          </div>
        );
      }
    },
  },
  render() {
    return <div>{this.error500()}</div>;
  },
};
