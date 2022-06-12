// import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';


function Card() {
    return (
        <>
            <a href="/">
                <div className="card border-0 mb-1">
                    <div className="img-container">
                        <img className="card-img-top card-img-container rounded-3"
                            src="https://i1.inkr.com/p/2022/4/14/15/1417494-565.png/180.webp" alt="" />

                        <span className="icon-hot">
                        </span>

                        <div className="card-img-overlay d-flex justify-content-around align-items-center p-1">
                            <div className="card-overlay-reader">
                                <FontAwesomeIcon icon={faEye} />
                                <span className="card-overlay-text">
                                    1.222
                                </span>
                            </div>
                            <div className="card-overlay-chapter">
                                <FontAwesomeIcon icon={faBook} />
                                <span className="card-overlay-text">
                                    120 chapters
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0 pt-2">
                        <h5 className="lead card-title text-center">Nhân vật chính mạnh nhất lịch sử</h5>
                    </div>
                </div>
            </a>

        </>
    );
}

export default Card;