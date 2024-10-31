const _mixins = {
    checkInternetConnection() {
        const isOnline = window.navigator.onLine
        if (isOnline) return 'online'
        else return 'offline'
    },
}

export default _mixins