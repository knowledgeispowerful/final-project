const baseURL = "https://knowledgeispowerful.github.io/wdd230/";
const linksURL = "https://knowledgeispowerful.github.io/wdd230/final/data/rentals.json";

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/rentals.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#rental-table tbody');
        data.rentals.forEach(rentalCategory => {
          rentalCategory.items.forEach(item => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
              <td>${rentalCategory.type}</td>
              <td>${item.name}</td>
              <td>${item.capacity}</td>
              <td>$${item.pricing.reservation.halfDay}</td>
              <td>$${item.pricing.reservation.fullDay}</td>
              <td>$${item.pricing.walkIn.halfDay}</td>
              <td>$${item.pricing.walkIn.fullDay}</td>
            `;
            
            tableBody.appendChild(row);
          });
        });
      })
      .catch(error => console.error('Error loading rental data:', error));
  });
  