// import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';


function Card(props) {

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        } else if (num > 1000000 && num < 999999999) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        } else if (num > 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B'
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    return (
        <>
            <a href="#">
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
                                    {numFormatter(props.comic.readCount)}
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
            </a>

        </>
    );
}

export default Card;