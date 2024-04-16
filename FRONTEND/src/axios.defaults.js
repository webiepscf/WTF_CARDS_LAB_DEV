import axios from 'axios';

// Configurer l'URL de base pour toutes les requêtes
axios.defaults.baseURL = 'http://localhost:8000/';

// Définir des en-têtes par défaut pour toutes les requêtes
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Permettre l'envoi des cookies lors des requêtes cross-domain
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// Exporter axios pour l'utiliser dans vos composants
export default axios;
