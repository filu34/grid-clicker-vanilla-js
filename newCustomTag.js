import createCustomTag from "./createCustomTag.js";
import createTagElement from "./createTagElement.js";

const newCustomTag = ( customTag, parent = null, attributes = null ) => {

	//Register new Custom Tag in HTMLElements. 
	const registeredCustomTag = createCustomTag( customTag );

	console.log( `Registered Custom Tag: ${ registeredCustomTag }.` );

	// Create Custom Tag in DOM.
	const createdCustomTag = createTagElement( registeredCustomTag, parent, attributes );

	console.log( `Created Custom Tag: ${ createdCustomTag }.` );

	return createdCustomTag;
};

export default newCustomTag;
