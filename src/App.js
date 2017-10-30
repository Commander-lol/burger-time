import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slice from './builder/Slice'
import color from 'color'

const defs = {
	bun: { color: '#c99e67', height: 1.5 },
	bread: { color: '#c99e67' },
	tomato: { color: '#ee775e' },
	beef: { color: '#936037' },
	lettuce: { color: '#89d974' },
	pickles: { color: '#ced952' },
	cheddar: { color: '#f9b233', height: 0.75 },
}

class App extends Component {
	state = {
		ingredients: [],
	}

	render() {
		const { ingredients } = this.state
		return (
			<div className="interface">
				<div className="flex-1 parts">
					<h3 style={{textAlign: 'center'}}>Burger Time</h3>
					<ul className="ingredients-list">
						{ this.renderIngredientListItem('Bread', 'bread') }
						{ this.renderIngredientListItem('Bun', 'bun') }
						{ this.renderIngredientListItem('Beef Burger', 'beef') }
						{ this.renderIngredientListItem('Tomato', 'tomato') }
						{ this.renderIngredientListItem('Lettuce', 'lettuce') }
						{ this.renderIngredientListItem('Cheddar', 'cheddar') }
					</ul>
				</div>
				<div className="flex-4 builder">
					{
						ingredients.map(slice => <Slice {...defs[slice]} />)
					}
				</div>
			</div>
		);
	}

	renderIngredientListItem(fullName, shortName) {
		const base = color(defs[shortName].color)

		return (
			<li 
				style={{backgroundColor: base.hex(), display: 'flex', alignItems: 'stretch', cursor: 'pointer'}} 
				onClick={() => this.add(shortName)}
			>
				<span style={{flex: 1, padding: 10}}>{ fullName }</span>
				<span 
					style={{
						display: 'block', 
						backgroundColor: base.darken(0.5).hex(),
						color: 'white',
						padding: 10,
					}}
				>
					+
				</span>
			</li>
		)
	}

	add(ingredient) {
		this.setState(s => ({ ingredients: [ingredient].concat(s.ingredients) }))
	}
}

export default App;
