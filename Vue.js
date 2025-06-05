Vue.createApp({
  data() { return { compteur: 0 }; },
  methods: { incrementer() { this.compteur++; } }
}).mount('#app1');

Vue.createApp({
  data() { return { texte: '' }; }
}).mount('#app2');

Vue.createApp({
  data() { return { ht: 0 }; },
  computed: { ttc() { return (this.ht * 1.2).toFixed(2); } }
}).mount('#app3');

Vue.createApp({
  data() { return { texte: '' }; },
  computed: {
    nbMots() { return this.texte.trim().split(/\s+/).filter(Boolean).length; }
  }
}).mount('#app4');

const vm = Vue.createApp({
  data() { return { isTrue: true }; }
}).mount('#app5');

Vue.createApp({
  data() { return { nom: '', affiche: false }; }
}).mount('#app6');

Vue.createApp({
  data() { return { isChecked: false }; }
}).mount('#app7');

Vue.createApp({
  data() { return { fruits: ['Pomme', 'Banane', 'Orange'] }; }
}).mount('#app9');

Vue.createApp({
  data() { return { langue: 'en' }; }
}).mount('#app10');

Vue.createApp({
  data() { return { celsius: 0 }; },
  computed: {
    fahrenheit() { return (this.celsius * 9 / 5 + 32).toFixed(2); }
  }
}).mount('#app11');

Vue.createApp({
  data() {
    return {
      nom: '', email: '',
      dateArrivee: '', dateDepart: '',
      tarif: 100
    };
  },
  computed: {
    nbNuits() {
      const debut = new Date(this.dateArrivee);
      const fin = new Date(this.dateDepart);
      return (fin - debut) / (1000 * 60 * 60 * 24) || 0;
    },
    total() {
      return this.nbNuits * this.tarif;
    }
  }
}).mount('#app12');