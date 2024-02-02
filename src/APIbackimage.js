export default function APIbackimage() {
  async function fetchbackgroundimage() {
    const accessKey = 'jMw5NwHRmvBL7r7nwiWLAp1eagviDK7vCff_UOvYZg8';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.urls && data.urls.full) {
        console.log(data.urls.full);
        const imageUrl = data.urls.full;
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundImage = `url('${imageUrl}')`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center center';
        body.style.height = '100vh';
      } else {
        console.error("Impossible d'obtenir l'URL de l'image depuis l'API Unsplash.");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des données depuis l'API Unsplash.", error);
    }
  }
  fetchbackgroundimage();
}