import React from 'react';

interface Props {
	narrative: string;
}

export const TextDisplay: React.FC<Props> = props => {
	const styles = {
		align: 'center',
		outline: '1px solid black',
		backgroundColor: '#006762',
		color: '#F9FBF5',
		maxWidth: '60%',
		margin: '0 auto',
		fontSize: 18,
	};
	return <div style={styles}>{props.narrative}</div>;
};
