const tableBody = document.getElementById('locations').getElementsByTagName('tbody')[0];

// Replace with your actual database connection details
const url = 'http://your_database_server/get_locations.php';  // Adjust URL based on your setup

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(location => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${location.location_id}</td>
        <td>${location.street_address}</td>
        <td>${location.postal_code}</td>
        <td>${location.city}</td>
        <td>${location.state_province}</td>
        <td>${location.country_id}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle errors appropriately, e.g., display an error message to the user
  });
