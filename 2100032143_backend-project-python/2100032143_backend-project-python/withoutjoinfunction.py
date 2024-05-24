import pandas as pd

# Sample data (replace with your actual data retrieval method)
data = {'location_id': [1, 2, 3, 4, 5],
        'street_address': ['1 Main St', '2 Queen Ave', '3 Elm Blvd', '4 Park Lane', '5 King Rd'],
        'city': ['Cupertino', 'Toronto', 'Montreal', 'Vancouver', 'Ottawa'],
        'state_province': ['California', 'Ontario', 'Quebec', 'British Columbia', 'Ontario'],
        'country_name': ['United States', 'Canada', 'Canada', 'Canada', 'Canada']}  # Include country_name directly

df = pd.DataFrame(data)

# Filter for Canada using boolean indexing
canada_addresses = df[df['country_name'] == 'Canada'][['location_id', 'street_address', 'city', 'state_province', 'country_name']]

# Display the results
print(canada_addresses.to_string(index=False))
