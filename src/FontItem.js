import React, { useState } from 'react';
import './FontItem.css';

function FontItem(props) {

	const { font } = props;

	const [ { currentStyle, currentWeight }, setState] = useState({
			currentStyle: "normal",
			currentWeight:	""
	});

	const updateStyle = (e) => {
		if (e.target.value === "bold") {
			setState({
				currentStyle: '',
				currentWeight: e.target.value
			});
		} else {
			setState({
				currentStyle: e.target.value,
				currentWeight: ''
			});
		}
	}

  return (
    <div className="font-item">    
			<input className="font-tester"
				type="text"
				name={font}
				placeholder={font}
				style={{fontFamily: font, fontStyle: currentStyle, fontWeight: currentWeight}}
				maxLength="30"

			/>
			<div>
				<span>See it in</span> 
				<select 
					id="font-styler"
					onChange={(e) => updateStyle(e)}>
					<option value="normal">Regular</option>
					<option value="italic">Italic</option>
					<option value="bold">Bold</option>
				</select>
			</div>
		</div>
  );
}

export default FontItem;
