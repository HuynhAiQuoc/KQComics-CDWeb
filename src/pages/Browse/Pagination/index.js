
import './Pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react'


function Pagination(props) {
    const [pages, setPages] = useState(() => {
        let arr = [];
        for (let i = 0; i < props.totalPages; i++) {
            arr.push(i + 1);
        }
        return arr;
    }
    );

    useEffect(() => {
        setPages(() => {
            let arr = [];
            for (let i = 0; i < props.totalPages; i++) {
                arr.push(i + 1);
            }
            return arr;
        })
    }, [props.totalPages])

    const handleChangePage = (num) => {
        props.changePage(num);
    }




    return (
        <>
            <ul className="pagination d-flex">
                <li className="page-item">
                    <button
                        className="page-item-btn page-item-arrow-btn"
                        disabled={props.currentPage === 1}
                        onClick={() => handleChangePage(props.currentPage - 1)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                </li>
                {
                    pages.map((num) => (
                        <li className="page-item" key={num}>
                            <button
                                className={`page-item-btn ` + ((num === props.currentPage) ? `page-item-btn--active` : ``)}
                                onClick={() => handleChangePage(num)}
                            >
                                {num}
                            </button>
                        </li>
                    )
                    )
                }
                <li className="page-item">
                    <button
                        className="page-item-btn page-item-arrow-btn"
                        disabled={props.currentPage === props.totalPages}
                        onClick={() => handleChangePage(props.currentPage + 1)}
                    >
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Pagination;