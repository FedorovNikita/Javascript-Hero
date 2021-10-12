class Github {
    constructor() {
        this.client_id = 'd3fa8b45af62166e6cf7';
        this.client_secret = 'e7ec7ee5278e220184609632e90ae42de80695d4';
    }

    // Get user by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id${this.client_id}&client_secret${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }

    // Get repos by name
    getRepos(user) {
        return new Promise((resolve, reject) => {
            if (!user.login) reject('User nor found');

            fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }
}










