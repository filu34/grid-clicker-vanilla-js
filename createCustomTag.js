const createCustomTag = ( customTag ) => {
	const CustomElement = function() {
		return Reflect.construct( HTMLElement, [], CustomElement ); 
	};

	Object.setPrototypeOf( CustomElement.prototype, HTMLElement.prototype );
	Object.setPrototypeOf( CustomElement, HTMLElement );
	customElements.define( customTag, CustomElement );

	return customTag;
};

export default createCustomTag;
