const baseUrl = 'http://localhost:3000/paletas';

async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();
};

findAllPaletas()
