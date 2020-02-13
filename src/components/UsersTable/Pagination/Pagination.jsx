import React from 'react';
import './Pagination.css';


const Pagination = ({ totalItemsCount, pageSize = 6, currentPage, handlePageNumberClick, nextPageNumber, prevPageNumber }) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pagesNumbers = [];

	if (pagesCount > 10 && currentPage <= 7) {
		pagesNumbers = [1, 2, 3, 4, 5, 6, 7, '...', pagesCount - 2, pagesCount - 1, pagesCount];
	} else if (pagesCount <= 10) {
		for (let i = 1; i <= pagesCount; i++) {
			pagesNumbers.push(i);
		}
	} else if (pagesCount > 10 && currentPage > 7 && currentPage < pagesCount - 4) {
		pagesNumbers = [ 1, '...', currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3, '...', pagesCount ];
	} else if (pagesCount > 10 && currentPage >= pagesCount - 4) {
		pagesNumbers = [ 1, 2, '...', pagesCount - 7, pagesCount - 6, pagesCount - 5, pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount ];
	} 

	let pages = pagesNumbers.map( (page, i) => (
		<div key={i}>
			<button
				disabled={page === '...' ? true : false}
				onClick={() => handlePageNumberClick(page)}
				className={ currentPage === +page ? 'paginationBtn currentPage' : 'paginationBtn' }
			>
				{`${page}`}
			</button>
		</div>
	));

	return (
		<div className='pagination'>
			<div>
				<button
					className='paginationBtn'
					disabled={currentPage > 1 ? false : true}
					onClick={ () => prevPageNumber() }
				>&larr;</button>
			</div>
			<div className='pagesWrapper'>{pages}</div>
			<div>
				<button
					className='paginationBtn'
					disabled={currentPage < pagesCount ? false : true}
					onClick={() => nextPageNumber() }
				>&rarr;</button>
			</div>
		</div>
	);
};

export default Pagination;
