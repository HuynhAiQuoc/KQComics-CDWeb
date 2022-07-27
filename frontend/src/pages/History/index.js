
import './History.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function History() {

    const { t } = useTranslation();

    const handleDelete = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="col-12 spacing-header">
                <div className="row">
                    <div className="border-bottom border-color-white p-0">
                        <div className="background-header search-title d-flex align-items-center ps-md-4 ps-2">
                            <h4 className="text-white m-0"></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="ps-lg-5 pe-lg-5 ps-md-4 pe-md-4 mt-4">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 five-columns-search col-xl-2 p-2">
                                <Link to={`/detail?titleNo=`}>
                                    <div className="card border-0 mb-1">
                                        <div className="img-container">
                                            <img className="card-img-top card-img-container rounded-3"
                                                src={'https://webtoon-phinf.pstatic.net/20200122_225/1579637567631DFxhW_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg'}
                                                alt=""
                                            />
                                            <div className="card-img-overlay d-flex justify-content-center align-items-center p-0">
                                                 <button 
                                                 type="button"
                                                 className="delete-comic-btn"
                                                 onClick={handleDelete}
                                                 >
                                                    <FontAwesomeIcon icon={faTimes}/> {t('history.deleteBtn')}
                                                 </button>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 pt-2">
                                            <h5 className="lead card-title text-center">
                                                {/* {props.comic.title} */}
                                                Acception
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="mt-3 d-flex justify-content-center">

                    </div>
                </div>
            </div>
        </>
    );
}

export default History;