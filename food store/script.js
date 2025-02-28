function search() {
    const query = document.getElementById('food-search').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
  
    // Sample data to search through
    const items = ['Dosa', 'Idli', 'Smoky burger', 'Veg-Pizza', 'momo'];
  
    // Filter items based on search query
    const results = items.filter(item => item.toLowerCase().includes(query));
  
    // Display results
    resultsDiv.innerHTML = results.length > 0 ? results.join('<br>') : 'No results found';
  }
  