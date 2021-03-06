export default {
    namespaced: true,
    state: {
        show: false,
        msg: '',
        style: '', // ['info', 'warn', 'error']
        timeout: null,
    },
    mutations: {
        show(state, { msg = '', style = 'info', timeout = null }) {
            state.msg = msg;
            state.style = style;
            state.timeout = timeout;
            state.show = true;
        },
        hide(state) {
            state.show = false;
            if (state.timeout) {
                clearTimeout(state.timeout);
                state.timeout = null;
            }
        },
    },
    actions: {
        info({ dispatch }, payload) {
            const style = 'info';
            dispatch('show', Object.assign({}, payload, { style }));
        },
        warn({ dispatch }, payload) {
            const style = 'warn';
            dispatch('show', Object.assign({}, payload, { style }));
        },
        error({ dispatch }, payload) {
            const style = 'error';
            dispatch('show', Object.assign({}, payload, { style }));
        },
        show({ commit, state }, payload) {
            const duration = payload.duration ? payload.duration : 2500;
            const timeout = setTimeout(() => {
                if (state.show) {
                    commit('hide');
                }
            }, duration);

            commit('show', Object.assign({}, payload, { timeout }));
        },
        hide({ commit }) {
            commit('hide');
        },
    },
};
