const createShadowDOM = ( CustomTag, mode = "open" ) => {

	if ( mode === "closed" ) {
		CustomTag.attachShadow( { mode: "closed" } );
	}
	else {
		CustomTag.attachShadow( { mode: "open" } );
	};

	return CustomTag.shadowRoot;
};

export default createShadowDOM;
