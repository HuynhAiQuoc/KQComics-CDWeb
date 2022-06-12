
import './Pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



function Pagination() {
    return (
        <>
            <ul className="pagination d-flex">
                <li className="page-item">
                    <button className="page-item-btn">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn page-item-btn--active">
                        1
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn">
                        2
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn">
                        3
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn">
                        4
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn">
                        5
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-item-btn">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Pagination;