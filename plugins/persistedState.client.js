import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'mobile-store',
        paths: ['cart']
    })(store)
}