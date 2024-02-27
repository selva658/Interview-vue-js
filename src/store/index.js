
// store/index.js

import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const API_BASE_URL = 'http://localhost:5000/homepage';

const store = createStore({
  plugins: [createPersistedState()],
  state() {
    return {
      user: null,
      password: null,
      email: null,
      id: null,
      admin: false,
      userList: [],
      notifications: [],
      isEdit:true
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPass(state, password) {
      state.password = password;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setId(state, id) {
      state.id = id;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },
    setUserList(state, userList) {
      state.userList = userList;
    },
    setNotification(state, notifications) {
      state.notifications = notifications;
    },
    setEdit(state,isEdit){
      state.isEdit = isEdit
    }
  },
  actions: {
    loginUser({ commit }, { user, password, email, id, admin }) {
      console.log(password)
      commit('setUser', user);
      commit('setPass', password);
      commit('setEmail', email);
      commit('setId', id);
      commit('setAdmin', admin);
      commit('setEdit',15)
    },
    async fetchUserList({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/getuser`);
        const userList = response.data;
        commit('setUserList', userList);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    },
    async fetchNotifications({ commit }) {
      try {
        const response = await axios.get(`${API_BASE_URL}/notification`);
        const notifications = response.data;
        commit('setNotification', notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    },
    async acceptNotification({ commit }, data) {
      try {
        const response = await axios.put(`${API_BASE_URL}/notification`, data);
        const notifications = response.data;
        commit('setNotification', notifications);
      } catch (error) {
        console.error('Error accepting notification:', error);
      }
    },
    async rejectNotification({ commit }, data) {
      try {
        const response = await axios.delete(`${API_BASE_URL}/notification`, { data });
        const notifications = response.data;
        commit('setNotification', notifications);
      } catch (error) {
        console.error('Error rejecting notification:', error);
      }
    },
    disableShow({commit},data){
      console.log(data)
      commit('setEdit', data);
    }
  },
});

export default store; 