import * as bootstrap from "bootstrap";

class titleNavbar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<style>
		 .custom-nav .navbar-brand span {
			color: #17282f;
			font-weight: 700;
			font-size: 4.5vmin;
			margin-left: 0.4em;
			font-family: "Raleway", sans-serif;
			white-space: nowrap;
			font-size: 1.5vmax;
			cursor:none;
		} 
		@media screen and (max-width: 992px) {
			.custom-nav .navbar-brand span {
				font-size: 2.2vmax;
			} 
		}
		
		</style>
		<span>Movie Corner<span>
		<span class="position-absolute end-0 fw-light">&copy; By Indra Tristia</span>`;
	}
}

customElements.define("title-navbar", titleNavbar);
