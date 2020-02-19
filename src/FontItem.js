import React from 'react';
import './FontItem.css';

function FontItem(props) {

	const { font } = props;

  return (
    <div className="font-item">    
			<input className="font-tester"
				type="text"
				name={font}
				placeholder={font}
				style={{fontFamily: font}}
			/>
			<div>
				<span>See it in</span> 
				<select id="font-styler">
					<option value="regular">Regular</option>
					<option value="italic">Italic</option>
					<option value="italic">Bold</option>
				</select>
			</div>
		</div>
  );
}

export default FontItem;
