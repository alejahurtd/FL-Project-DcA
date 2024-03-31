import creatPostStyle from './creatPost.css';

class CreatPost extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
			<style> ${creatPostStyle} </style>`;

			const opacityDiv = this.ownerDocument.createElement('div');
			opacityDiv.className = 'none';

			const creatPost = this.ownerDocument.createElement('section');
			creatPost.className = 'creatpost';

			// Crear el botón
			const button = this.ownerDocument.createElement('button');
			button.className = 'action-button';
			button.id = 'buttonCreatPost';
			button.classList.add('plus');

			// Añadir el evento click al botón
			button.addEventListener('click', () => {
				// Manejar el evento de clic del botón aquí
				console.log('Button clicked!', button.id);
				popUp.classList.add('display');
				popUp.classList.remove('none');
				opacityDiv.classList.add('display-opacity-div');
				opacityDiv.classList.remove('none');
			});

			const hidePopUp = () => {
				popUp.classList.remove('display');
				popUp.classList.add('none');
				opacityDiv.classList.remove('display-opacity-div');
				opacityDiv.classList.add('none');
			};
			creatPost.appendChild(button);

			const popUp = this.ownerDocument.createElement('section');
			popUp.className = 'none';

			const containerMessages = this.ownerDocument.createElement('div');
			containerMessages.className = 'containerMessages';
			popUp.appendChild(containerMessages);

			const messageCreatPost = this.ownerDocument.createElement('div');
			messageCreatPost.className = 'messageCreatPost';
			messageCreatPost.textContent = 'Creat Post';
			containerMessages.appendChild(messageCreatPost);

			const line = this.ownerDocument.createElement('div');
			line.className = 'line';
			containerMessages.appendChild(line);

			const messageCreatTweet = this.ownerDocument.createElement('div');
			messageCreatTweet.className = 'messageCreatTweet';
			messageCreatTweet.textContent = 'Creat Tweet';
			containerMessages.appendChild(messageCreatTweet);

			const line2 = this.ownerDocument.createElement('div');
			line2.className = 'line';
			containerMessages.appendChild(line);

			// Crear el botón para cerrar el popUp
			const closeButton = this.ownerDocument.createElement('button');
			closeButton.id = 'button-close';
			closeButton.textContent = 'Close';
			closeButton.addEventListener('click', hidePopUp);
			popUp.appendChild(closeButton);

			this.shadowRoot.appendChild(opacityDiv);

			this.shadowRoot.appendChild(creatPost);
			this.shadowRoot.appendChild(popUp);
		}
	}
}

customElements.define('creat-post', CreatPost);
export default CreatPost;
