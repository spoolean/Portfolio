export default {
  name: "Store",
  state: {
    information: null,
    projects: null,
    showModal: false,
    modalProject: null,
  },
  mutations: {
    setInformation(state, information) {
      state.information = information;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setModalProject(state, modalProject) {
      state.showModal = true;
      state.modalProject = modalProject;
    },
  },
  actions: {
    async fetchInformation({ commit }) {
      commit("setInformation", null);
      commit("setProjects", null);
      commit("setLoading", true);

      fetch(`${window.location.origin}/projects`)
        .then((r) => {
          if (!r.ok) {
            throw new Error(r.statusText);
          }
          return r.json();
        })
        .then((data) => {
          commit("setProjects", data);
        })
        .catch((error) => {
          console.log(error);
        });

      fetch(`${window.location.origin}/information`)
        .then((r) => {
          if (!r.ok) {
            throw new Error(r.statusText);
          }
          return r.json();
        })
        .then((data) => {
          commit("setInformation", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openModal({ commit }, project) {
      commit("setModalProject", project);
    },
  },
};
