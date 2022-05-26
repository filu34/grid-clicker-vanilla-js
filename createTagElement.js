const createTagElement = ( child, parent, attributes ) => {

	if ( typeof child === 'string' ) {
		child = document.createElement( child );
	}
	else {
		console.error( new Error( `WARNING: Child tag not specified. Value of ${ child }.` ) );
	};
	
	if ( typeof parent === 'object' ) {
		parent.appendChild( child );
	}
	else {
		console.warn( `WARNING: Parent for a child tag is not specified. Value of "${ child }".` );
	};
	
	if ( attributes ) {  
		if (
		    typeof attributes === 'object' &&
			    !Array.isArray( attributes ) &&
			    attributes !== null
		) {
			for ( const attribute in attributes ) {
				child.setAttribute( attribute, attributes[ attribute ] );
			};
		};
		if ( Array.isArray( attributes ) ) {
			attributes.forEach( attribute => {
				child.setAttribute( attribute[0], attribute[1] );
			});
		}

	}
	else {
		console.warn( `WARNING: Attributes for a child tag are not specified. Value is "${ child }".` );
	}; 

	return child;
};

export default createTagElement;
