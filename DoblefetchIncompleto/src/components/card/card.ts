import styles from './styles.css';
import { dispatch } from '../../store/index';
import { Episode } from '../../types/episodes';

export enum epProperties {
	'episode' = 'episode',
	'name' = 'name',
	'imgCharac' = 'imgCharac'
}

export default class Card extends HTMLElement {
	properties: Record<epProperties, string> = {
		episode: "",
		name: "",
		imgCharac:""
	}

	static get observedAttributes() {
		const attrs: Record<epProperties, null> = {
			episode: null,
			name: null,
			imgCharac: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: epProperties, _: unknown, newValue: string) {
		switch (propName) {
			case epProperties.episode:
				this.properties.episode = newValue
				break;
			case epProperties.name:
				this.properties.name = newValue
				break;
			case epProperties.imgCharac:
				this.properties.imgCharac = newValue
				break;
			default:
				break;
		}
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
			<h1>${this.properties.episode}</h1>
			<h3>${this.properties.name}</h3>
			<img src="${this.properties.imgCharac}">
			`;
			const imgElement = this.shadowRoot.querySelector('img');
			if (imgElement) {
				imgElement.src = this.properties.imgCharac;
			} else {
				console.error("Elemento <img> no encontrado en el shadow DOM.");
			}
			
	}
	
}

customElements.define('app-card', Card);
