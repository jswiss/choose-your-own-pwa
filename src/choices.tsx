import React, { useState } from 'react';
import { usePersistedState } from './use-persisted-state';

interface Props {
	choiceOneText: string;
	choiceOneData: number;
	choiceTwoText: string;
	choiceTwoData: number;
}

export const Choices: React.FC<Props> = props => {
	const divStyles = {
		display: 'inline',
	};

	const buttonStyles = {
		color: '#F9FBF5',
		backgroundColor: '#E59400',
	};

	return (
		<div style={divStyles}>
			<button style={buttonStyles}>{props.choiceOneText}</button>
			<button style={buttonStyles}>{props.choiceTwoText}</button>
		</div>
	);
};
