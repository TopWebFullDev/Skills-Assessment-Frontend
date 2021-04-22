/** @format */
import CommonService from "../../api/CommonService.js";

export const namespaced = true;

export const state = () => ({
  educations: [],
  workExp: [],
  randomNum: null,
  loading: false
});

export const getters = {
  educations: (state) => state.educations,
  workExp: (state) => state.workExp,
  randomNum: (state) => state.randomNum,
  loading: (state) => state.loading,
};

export const mutations = {
  SET_EDUCATIONS(state, data) {
    state.educations = data
  },
  SET_WORKEXPERIENCE(state, data) {
    state.workExp = data
  },
  SET_RANDOMNUMBER(state, data) {
    state.randomNum = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  }
};

export const actions = {
  async getEducations({ commit }) {
    try {
      const r = await CommonService.getEducations();
      commit("SET_EDUCATIONS", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async getWorkExp({ commit }) {
    try {
      const r = await CommonService.getWorkExp();
      commit("SET_WORKEXPERIENCE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async getRandomNumber({ commit }) {
    try {
      const r = await CommonService.getRandomNumber();
      commit("SET_RANDOMNUMBER", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
};
