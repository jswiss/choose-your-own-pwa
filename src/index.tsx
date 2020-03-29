import React from 'react';
import ReactDOM from 'react-dom';
import { set, get } from 'idb-keyval';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

async function testIDBKeyval() {
	await set('hello', 'world');
	const whatDoWeHave = await get('hello');
	console.log(`When we queried idb-keyval for 'hello', we found: ${whatDoWeHave}`);
}

testIDBKeyval();
