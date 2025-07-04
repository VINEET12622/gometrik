function compareCabs() {
  const pickup = document.getElementById('pickup').value;
  const drop = document.getElementById('drop').value;
  const results = document.getElementById('results');
  results.innerHTML = '';
  if (!pickup || !drop) {
    alert('Please enter both pickup and drop locations');
    return;
  }
  const data = [
    { name: 'Uber', fare: '₹120', eta: '4 min', link: 'https://m.uber.com/' },
    { name: 'Ola', fare: '₹130', eta: '5 min', link: 'https://book.olacabs.com/' },
    { name: 'Rapido', fare: '₹70', eta: '3 min', link: 'https://www.rapido.bike/' }
  ];
  data.forEach(service => {
    results.innerHTML += `
      <div class="result">
        <strong>${service.name}</strong><br/>
        Fare: ${service.fare} | ETA: ${service.eta}<br/>
        <a href="${service.link}" target="_blank">Book Now</a>
      </div>
    `;
  });
}