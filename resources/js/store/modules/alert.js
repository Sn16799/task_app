const state = {
    message: '',
    type: 'success'
};

const mutations = {
    setAlert(state, {mssage, type}) {
        state.message = message;
        state.type = type || 'success';
    }
};

export default {
    namespaced: true,
    state,
    mutations
};