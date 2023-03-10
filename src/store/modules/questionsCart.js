import { setCookie, getCookie } from '../../utils/cookie-utils';
import { hasV } from '../../utils/u';
import * as _ from 'lodash';

export const QUESTIONS_CARTS = 'questions';

const questionsCart = {
    state: {
        questions: [],
    },

    mutations: {
        SET_QUESTIONS_CARTS: (state, data) => {
            state.questions = data;
        },
    },

    actions: {
        initQuestionsCartDataFromCookie({ commit, state }) {
            const data = getCookie(QUESTIONS_CARTS);
            if (hasV(data)) {
                commit('SET_QUESTIONS_CARTS', data);
            } else {
                commit('SET_QUESTIONS_CARTS', []);
                setCookie(QUESTIONS_CARTS, []);
            }
            return Promise.resolve(state);
        },
        addQuestion({ commit, state }, question) {
            const data = getCookie(QUESTIONS_CARTS);
            if (hasV(data)) {
                commit('SET_QUESTIONS_CARTS', data);
            } else {
                commit('SET_QUESTIONS_CARTS', []);
                setCookie(QUESTIONS_CARTS, []);
            }

            if (_.isArray(state.questions)) {
                let has = false;
                let list = state.questions;
                state.questions.forEach((i) => {
                    if (i.id && question.id && i.id == question.id) {
                        has = true;
                    }
                });
                if (!has) {
                    list.push(question);
                    commit('SET_QUESTIONS_CARTS', list);
                    setCookie(QUESTIONS_CARTS, list);
                }
            }
            return Promise.resolve(state);
        },
        removeQuestion({ commit, state }, question) {
            const data = getCookie(QUESTIONS_CARTS);
            if (hasV(data)) {
                commit('SET_QUESTIONS_CARTS', data);
            } else {
                commit('SET_QUESTIONS_CARTS', []);
                setCookie(QUESTIONS_CARTS, []);
            }

            if (_.isArray(state.questions)) {
                let list = [];
                let templateList = state.questions;
                templateList.push(question);
                templateList.forEach((i) => {
                    if (i.id && question.id && i.id == question.id) {
                    } else {
                        let has = false;
                        list.forEach((j) => {
                            if (j.id && i.id && i.id == j.id) {
                                has = true;
                            }
                        });
                        if (!has) {
                            list.push(i);
                        }
                    }
                });
                commit('SET_QUESTIONS_CARTS', list);
                setCookie(QUESTIONS_CARTS, list);
            }
            return Promise.resolve(state);
        },
        clearQuestionsDate({ commit, state }) {
            commit('SET_QUESTIONS_CARTS', []);
            setCookie(QUESTIONS_CARTS, []);
        },
    },
};

export default questionsCart;
