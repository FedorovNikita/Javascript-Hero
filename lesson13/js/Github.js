class Github {
  constructor() {
    this.client_id = 'd3fa8b45af62166e6cf7';
    this.client_secret = 'ff2d1c042c0bec254bcc8f7c965e0721fc7df37c'; 
  }

  // Get user by name
  getUser(name) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .then(res => res.json())
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
  }

  // Get repos by name
  getRepos(user) {
    return new Promise((resolve, reject) => {
      if (!user.login) reject('User nor found');

      fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .then(res => res.json())
        .then(user => resolve(user))
        .catch(err => reject(err))
    })
  }

  async getUserAsync(name) {
    
    const user = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await fetch(`https://api.github.com/users/${name}/repos?per_page=${5}&sort=${'created: asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const userData = await user.json();
    const reposData = await repos.json();

    return { userData, reposData };
  }
}