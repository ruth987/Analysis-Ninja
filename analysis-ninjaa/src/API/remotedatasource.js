class CodeforcesUser {
  constructor() {
    // Properties will be initialized through the fromJson method
    this.contribution = 0;
    this.lastOnlineTimeSeconds = 0;
    this.rating = 0;
    this.friendOfCount = 0;
    this.titlePhoto = '';
    this.rank = '';
    this.handle = '';
    this.maxRating = 0;
    this.avatar = '';
    this.registrationTimeSeconds = 0;
    this.maxRank = '';
  }

  static fromJson(data) {
    // Check if the response has the expected structure
    if (!data || data.status !== 'OK' || !data.result || data.result.length === 0) {
      throw new Error('Invalid API response:', data);
    }

    const userInfo = data.result[0];

    // Create a new instance of CodeforcesUser and initialize properties
    const user = new CodeforcesUser();
    user.contribution = userInfo.contribution || 0;
    user.lastOnlineTimeSeconds = userInfo.lastOnlineTimeSeconds || 0;
    user.rating = userInfo.rating || 0;
    user.friendOfCount = userInfo.friendOfCount || 0;
    user.titlePhoto = userInfo.titlePhoto || '';
    user.rank = userInfo.rank || '';
    user.handle = userInfo.handle || '';
    user.maxRating = userInfo.maxRating || 0;
    user.avatar = userInfo.avatar || '';
    user.registrationTimeSeconds = userInfo.registrationTimeSeconds || 0;
    user.maxRank = userInfo.maxRank || '';

    return user;
  }
}
class CodeforcesAPI {
  constructor() {
    // Specify the Codeforces API URL without the handle
    this.apiUrl = 'https://codeforces.com/api/user.info?handles=';
  }

  get(handle) {
    // Combine the apiUrl and handle to form the complete URL
    const fullApiUrl = this.apiUrl + handle;

    // Make a GET request to the API
    return fetch(fullApiUrl)
      .then(response => {
        // Check if the request was successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Use the CodeforcesUser.fromJson method to create a CodeforcesUser object
        const user = CodeforcesUser.fromJson(data);

        // Return the CodeforcesUser object
        return user;
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch Error:', error);
        throw error; // Re-throw the error for the caller to handle
      });
  }
}

// Example usage:
const codeforcesAPI = new CodeforcesAPI();
const handle = 'ruthwossen75';

codeforcesAPI.get(handle)
  .then(user => {
    // Access properties of the CodeforcesUser object
    console.log('User Handle:', user.handle);
    console.log('User Rating:', user.rating);
    console.log('User Rank:', user.rank);
  })
  .catch(error => {
    // Handle any errors that occurred during the API request
    console.error('API Error:', error);
  });
