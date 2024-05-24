<?php
// Database connection details (replace if needed)
$servername = "localhost";
$username = "root";
$password = "nkcpathuri";
$dbname = "safertek";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch all locations
$sql = "SELECT * FROM locations";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
} else {
  echo "No locations found";
}

$conn->close();

// Return data as JSON
echo json_encode($data);
