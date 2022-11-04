# Plugin Modal

modal success - generic component

## Tech

-   [ReactApp](https://github.com/facebook/create-react-app)-Create React apps with no build configuration
-   [React Router](https://github.com/remix-run/react-router)- Routing library for the React JavaScript library
-   [Storybook](https://storybook.js.org/) - tool for UI development
-   [Visual Studio Code](https://code.visualstudio.com/) - Code editor.
-   [Github]( https://github.com/)


## Example Modal
```
const  Modal = ({ show, title, children, footer, onClose}) => {
const  modal = (
	<div  className="modal"  data-testid="modal">
		<div  className="modal-container">
			<h3  className="modal-title">{title}</h3>
			<p  className="modal-body">{children}</p>
			<button className="close-button modal-footer"node  data-testid="close-button" onClick={() => {onClose();}}>
				{footer}
			</button>
		</div>
	</div>
	);
	return  show ? ReactDOM.createPortal(modal,document.body) : null;
};
```

## Installation Plugin Modal

-   git clone
-   npm install
-   npm run storybook

## Notes

- Package NPM : [lc_modal_custom_projet14]( https://www.npmjs.com/)

## Author

Laurène COURDE

