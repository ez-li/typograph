import React from 'react';
import './FontList.css';
import FontItem from './FontItem.js'

function FontList(props) {

	const { fonts } = props;

  return (
    <div className="font-list">
			{fonts.map((font,i) => (
				<FontItem font={font} key={i} />
			))}
    </div>
  );
}

export default FontList;
