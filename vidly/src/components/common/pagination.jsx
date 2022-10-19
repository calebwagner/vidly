import React from 'react'; //imr
import _ from 'lodash'

// this is a stateless functional component
const Pagination = (props) => {
    // these are prop properties aka they're apart of the component interface
    const { itemsCount, pageSize } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return <nav>
        <ul className='pagination'>
            {pages.map(page => (
                <li key={page} className='page-item'>
                    <a className='page-link'>
                        {page}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
}

export default Pagination;