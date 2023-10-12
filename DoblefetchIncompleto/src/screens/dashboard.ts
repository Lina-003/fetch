import styles from './styles.css';
import { addObserver, appState, dispatch } from '../store/index';
import { getApi } from '../services/getApi';
import { Card } from '../components/export';
import { epProperties } from '../components/card/card';

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot){
		 const data = await getApi();
		 console.log(data.results)

		 data.results.forEach((e : any) => {
			const card = this.ownerDocument.createElement('app-card') as Card;
			card.setAttribute(epProperties.episode, e.episode)
			card.setAttribute(epProperties.name, e.name)
			e.characters.forEach((characterUrl : string) => {
				fetch(characterUrl)
				.then(response => response.json())
				.then(characterData => {
				 const characterImage = characterData.image;
				 card.setAttribute(epProperties.imgCharac, characterImage)
				  console.log(`img:${characterImage}`);
				})
				.catch(error => console.error(error));
			});

			this.shadowRoot?.appendChild(card)
		 })
		} 

		
		
		
		
		/* this.shadowRoot.innerHTML = '';
		const card = this.ownerDocument.createElement('app-card');
		card.setAttribute('text_button', 'Cambiar background');
		card.setAttribute('description', 'holisssssss');
		this.shadowRoot?.appendChild(card); */
	}
}

customElements.define('app-dashboard', Dashboard);
