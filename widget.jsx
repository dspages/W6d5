import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
		// ReactDOM.render(, root);
		const tabs = [{title: "tab 1", content: "tab 1 is the best tab"},
	{title: "tab 2", content: "tab 2's content"},
	{title: "tab 3", content: "tab 3 content"}];
	const tas = ["Dallas","Kelly","Debra","Aaron","Hope"];
	ReactDOM.render(
		<div>
			<Clock/>
			<Weather/>
			<Autocomplete names={tas}/>
			<Tabs tabs={tabs}/>
		</div>
	, root);
});
