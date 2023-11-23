function fetchDataForContest(contestId) {
  const apiUrl = `https://codeforces.com/api/contest.status?contestId=${contestId}&asManager=false&from=1&count=10`;

  // Fetch data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Log the fetched data
      console.log('Fetched data:', data);
      
      // You can access individual elements like this:
      const firstResult = data.result[0];
      console.log('First result:', firstResult);

      // Further processing...
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Example usage with a specific contest ID
const exampleContestId = 566;
fetchDataForContest(exampleContestId);
