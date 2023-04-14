import './App.css';
import {lorem} from './lorem';

function App() {
	return (
		<div className='App p-12'>
			<h1 className='text-7xl m-5'>Hello world!</h1>
			<p className='m-7'>{lorem}</p>
		</div>
	);
}

export default App;
