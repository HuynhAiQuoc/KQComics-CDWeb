// import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import FormatService from '~/service/format.service';

function Card(props) {
 
    return (
        <>
           <Link to={`/detail?titleNo=` + props.comic.titleNo}>
                <div className="card border-0 mb-1">
                    <div className="img-container">
                        <img className="card-img-top card-img-container rounded-3"
                            src={'https://webtoon-phinf.pstatic.net' + props.comic.thumbnail}
                            alt=""
                        />
                        {
                            props.comic.hotTitle ? (
                                <span className="icon-hot">
                                </span>
                            ) : ''
                        }

                        <div className="card-img-overlay d-flex justify-content-around align-items-center p-1">
                            <div className="card-overlay-reader">
                                <FontAwesomeIcon icon={faEye} />
                                <span className="card-overlay-text">
                                    {FormatService.numFormatter(props.comic.readCount)}
                                </span>
                            </div>
                            <div className="card-overlay-chapter">
                                <FontAwesomeIcon icon={faBook} />
                                <span className="card-overlay-text">
                                    {props.comic.totalServiceEpisodeCount}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 pt-2">
                        <h5 className="lead card-title text-center">
                            {props.comic.title}
                        </h5>
                    </div>
                </div>
           </Link>

        </>
    );
}

export default Card;