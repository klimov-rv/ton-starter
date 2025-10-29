export const usePagesStore = defineStore('pages', {
  // !
  // stub store
  state: () => ({
    PagesInSuite: [],
  }),
  actions: {
    async loadPagesInSuite(id) {
      // const response = await http.get(`/v1/page/${id}`);
      // context.commit("addPagesInSuite", response.data);
      const { _data, _error } = await useFetch(`/v1/page/${id}`);
    },
  },
  getters: {
    getPagesInSuite({ PagesInSuite }) {
      return PagesInSuite;
    },
  },
});

// import http from "../services/http-common";

// export const actions = {
//   async PagesInFooter(context) {
//     const response = await http.get(`/v1/page/categories/footer`);
//     context.commit("addPagesInFooter", response.data);
//   },
//   async PagesInKnow(context) {
//     const response = await http.get(`/v1/page/categories/know`);
//     context.commit("addPagesInKnow", response.data);
//   },
//   async PagesInSuite(context, id) {
//     const response = await http.get(`/v1/page/${id}`);
//     context.commit("addPagesInSuite", response.data);
//   },
// }

// export const mutations = {
//   addPagesInFooter(state, pagesInFooter) {
//     state.pagesInFooter = pagesInFooter;
//   },
//   addPagesInKnow(state, pagesInKnow) {
//     state.pagesInKnow = pagesInKnow;
//   },
//   addPagesInSuite(state, pagesInSuite) {
//     state.pagesInSuite = pagesInSuite;
//   },
//   addLinkAboutNFT(state, linkAboutNFT) {
//     state.linkAboutNFT = linkAboutNFT;
//   },
// }

// export const state = () => ({
//   pagesInFooter: [],
//   pagesInKnow: [],
//   pagesInSuite: [],
//   linkAboutNFT: ''
// });

// export const getters = {
//   getPagesInFooter(state) {
//     return state.pagesInFooter;
//   },
//   getPagesInKnow(state) {
//     return state.pagesInKnow;
//   },
//   getPagesInSuite(state) {
//     return state.pagesInSuite[0];
//   },
//   getLinkAboutNFT(state) {
//     return state.linkAboutNFT;
//   },
// }
