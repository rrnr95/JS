class Github {
  constructor() {
    this.client_id = '94c327233236dae32f83';
    this.clien_secret = '2a3bbfc055ea7cc5f3134b5d65e99c9af09b9b0a';
  }

  async getUser(user) {

    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`); 

    const profile = await profileRes.json();

    return {
      profile
    }

  }

}