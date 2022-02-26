class Github {
  constructor() {
    this.client_id = 'fdc30be338b5e010bd70';
    this.client_secret = '0e6dd00859368d49d2b4659e8b82ab8ab8b2ee2f';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {

    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileRes.json();
    const repos = await reposRes.json();

    return {
      profile,
      repos
    };
  }
}