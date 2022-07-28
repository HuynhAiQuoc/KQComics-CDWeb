
import './History.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import HistoryService from '~/service/history.service';
import AuthService from '~/service/auth.service';

import data from '~/data/data.json';


function History() {

    const { t } = useTranslation();

    const [listComics, setListComics] = useState([{}]);
    const [historyComics, setHistoryComics] = useState([{}])



    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            HistoryService.getHistories(Number(user.id)).then(res => {
                setHistoryComics(res.data)
            })
        } else {
            setHistoryComics([{}])
        }
    }, [])

    useEffect(() => {
        const filterValue = historyComics.map((h) => { return h.titleNo });
        setListComics(data.filter(c => filterValue.includes(c.titleNo)))
    }, [historyComics])


    const handleDelete = (e, titleNo) => {
        e.preventDefault(); 
        e.stopPropagation();
        console.log(titleNo)
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
                            {
                                (listComics.length > 0) ?
                                    (
                                        listComics.map(comic => (
                                            <div key={comic.titleNo} className="col-6 col-sm-4 col-md-3 five-columns-search col-xl-2 p-2">
                                                <Link to={`/detail?titleNo=` + comic.titleNo} >
                                                    <div className="card border-0 mb-1">
                                                        <div className="img-container">
                                                            <img className="card-img-top card-img-container rounded-3"
                                                                src={'https://webtoon-phinf.pstatic.net/' + comic.thumbnail}
                                                                alt=""
                                                            />
                                                            <div className="card-img-overlay d-flex justify-content-center align-items-center p-0">
                                                                <button
                                                                    type="button"
                                                                    className="delete-comic-btn"
                                                                    onClick={() => handleDelete(comic.titleNo)}
                                                                >
                                                                    <FontAwesomeIcon icon={faTimes} /> {t('history.deleteBtn')}
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="card-body p-0 pt-2">
                                                            <h5 className="lead card-title text-center">
                                                                {/* {props.comic.title} */}
                                                                {comic.title}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        ))
                                    ) :
                                    (
                                        <>
                                        </>
                                    )
                            }

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