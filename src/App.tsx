import React, { useState, useEffect } from 'react';
import { set, get } from 'idb-keyval';

import { usePersistedState } from './use-persisted-state';
import { Choices } from './choices';
import { TextDisplay } from './text-display';
import './App.css';

const sharedStyles = {
	height: '30rem',
	fontSize: '5rem',
	textAlign: 'center',
} as const;

export function App() {
	const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>('darkModeOn', true);

	const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setDarkModeOn(target.checked);

	const styles = {
		...sharedStyles,
		...(darkModeOn
			? {
					backgroundColor: 'black',
					color: 'white',
			  }
			: {
					backgroundColor: 'white',
					color: 'black',
			  }),
	};

	return (
		<div style={styles}>
			{darkModeOn === undefined ? (
				<React.Fragment>Loading preferences...</React.Fragment>
			) : (
				<React.Fragment>
					<input
						type="checkbox"
						value="darkMode"
						checked={darkModeOn}
						id="darkModeOn"
						name="darkModeOn"
						style={{ width: '3rem', height: '3rem' }}
						onChange={handleOnChange}
					/>
					<label htmlFor="darkModeOn">Use dark mode?</label>
					<TextDisplay narrative="testing 1 2 3" />
					<Choices
						choiceOneText="Continue with your holiday"
						choiceOneData={1}
						choiceTwoText="Stay in the UK"
						choiceTwoData={2}
					/>
				</React.Fragment>
			)}
		</div>
	);
}
