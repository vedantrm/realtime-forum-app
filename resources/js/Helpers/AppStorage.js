class AppStorage {

    storeToken(token) {
        localStorage.setItem('token',token);
    }

    storeUser(name) {
        localStorage.setItem('name',name);
    }

    store(user,token) {
        this.storeToken(token);
        this.storeUser(user);
    }

    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUser() {
        return localStorage.getItem('name');
    }
}

export default AppStorage = new AppStorage;
