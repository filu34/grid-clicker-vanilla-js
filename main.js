import createCustomTag from "./createCustomTag.js";
import customComponent from "./customComponent.js";

const { newCustomTag, createTagElement, createShadowDOM } = customComponent;

// const helloWorld = newCustomTag( "hello-world", document.body, { class: "hello-world"} );

// helloWorld.textContent = 'hello world';

// const helloShadowDOMroot = createShadowDOM( helloWorld );

// helloShadowDOMroot.textContent = 'hello shadow';

// console.log( helloShadowDOMroot );

const main = function() {
	
	const rows = 10;
	const columns = 10;

    let decrementArray = new Array( 10 );
    decrementArray.fill( 9 );

	const newCell = createCustomTag( "cell-element" );
	const newRowContainer = createCustomTag( "row-container" );
	const newGridContainer = createCustomTag( "grid-container" ); 

    const array2dCreator = ( rows, columns ) => {
        let new2dArray = new Array( rows );

        for ( let i = 0; i < new2dArray.length; i++ ) {
            new2dArray[i] = Array.from( Array( columns ).keys() );
        };
        return new2dArray;
    };

    // Create 2D array for Grid.
    const brickGrid = array2dCreator( 10, 10 );

	const onClickHandler = ( event, indexOfColumn, indexOfRow, column, container ) => {

        if( indexOfColumn >= 0 && indexOfColumn < columns && indexOfRow >= 0 && indexOfRow < rows ) {

            brickGrid[ indexOfColumn ][ decrementArray[ indexOfColumn ] ] = "blue";

            decrementArray[indexOfColumn] = decrementArray[ indexOfColumn ] - 1;

			container.remove();
			drawGrid();
        };
    };

	const App = newCustomTag( "app-container", document.body, { id: "App", class: "App" } );
	
	const drawGrid = function() {
		const GridContainer = createTagElement( "grid-container", App, { class: "Grid-Container" } ); 
		
		brickGrid.map( column => {

			const indexOfColumn = brickGrid.indexOf( column );

			const RowContainer = createTagElement( "row-container", GridContainer, { class: "row" } );

			column.map( row => {
			
				const indexOfRow = column.indexOf( row );

				const index = `${ indexOfColumn }${ indexOfRow }`;

				const Cell = createTagElement( 
					"cell-element", 
					RowContainer, 
					{ 
						id: index,
						class: `cell ${ row }`,
					}
				);

				Cell.addEventListener( "click", ( event ) => onClickHandler( event, indexOfColumn, indexOfRow, column, GridContainer ) );
				Cell.textContent = `${ indexOfColumn } ${ indexOfRow }`;
			});
		});
	};

	drawGrid();
};

main();
