import React from 'react';
import './Search.css';

function Search(props) {

	const { updateList } = props;

  return (
    <div className="search-bar">
			<input className="search-input"
				type="text"
				placeholder="Preview this one.."
				maxLength="30"
			/>
    </div>
  );
}

export default Search;
