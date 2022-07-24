
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Link } from 'react-router-dom';
import data from '~/data/data.json'

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

import './SearchField.css';


function SearchField() {


    const { t } = useTranslation();

    const navigate = useNavigate();
    const inputSearch = useRef();
    const boxSearchRef = useRef();

    const [visibleSearchResult, setVisibleSearchResult] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [listComics] = useState([...data]);
    const [searchResult, setSearchResult] = useState([]);

    const handleShowSearchResult = () => {
        setVisibleSearchResult(true);
    }

    const handleSearch = (e) => {
        setTextSearch(e.target.value);
    }

    useEffect(() => {
        const handler = (event) => {
            if (!boxSearchRef.current.contains(event.target)) {
                setVisibleSearchResult(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);


    useEffect(() => {
        let arr = [];
        if (textSearch.length > 1) {
            listComics.forEach(comic => {
                if (((comic.title).toLowerCase()).includes(textSearch)) {
                    arr.push(comic);
                }
            })
            setSearchResult(arr);
        } else {
            setSearchResult([])
        }
    }, [textSearch])

    useEffect(() => {
        if (!visibleSearchResult) {
            setTextSearch('');
        }
    }, [visibleSearchResult])
 

    const handleSubmit = (e) => {
        e.preventDefault();
        inputSearch.current.blur();
        setVisibleSearchResult(false);
        navigate('/search?text=' + textSearch);
    }


    return (
        <>
            <div className="search-size position-relative tippy-search">

                <form onSubmit={handleSubmit}>
                    <div className="input-group-append d-flex align-items-center input-group border border-color-white border-radius">
                        <input
                            type="text"
                            name="search"
                            autoComplete="off"
                            spellCheck="false"
                            placeholder={t('header.search.placeholder')}
                            className="form-control bg-transparent border-0"
                            onFocus={handleShowSearchResult}
                            onChange={handleSearch}
                            value={textSearch}
                            required={true}
                            ref={inputSearch}
                        />
                        <button
                            className="d-lg-block d-none btn btn-outline-secondary border-0 border-start border-color-white"
                            type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>

                <div ref={boxSearchRef} className={`box-search-result ` + (visibleSearchResult ? `d-block` : `d-none`)}>
                    <div className="search-result-content">
                        {
                            (searchResult.length > 0) ?
                                (
                                    searchResult.map(comic => (
                                        <Link to={`/detail?titleNo=` + comic.titleNo} key={comic.titleNo}>
                                            <div className="search-result-content-item" >
                                                <img src={'https://webtoon-phinf.pstatic.net' + comic.thumbnail}
                                                    className="search-result-item--img rounded-2" alt="" />
                                                <p className="search-result-item--info">
                                                    {comic.title}
                                                </p>
                                            </div>
                                        </Link>
                                    ))
                                ) :

                                (
                                    <div className="search-result-none">
                                        <div className="search-result-none-icon">
                                            <FontAwesomeIcon icon={faBoxOpen} />
                                        </div>
                                        <div className="search-result-none-text">
                                            {t('header.search.resultNone')}
                                        </div>
                                    </div>
                                )
                        }

                    </div>
                </div>





            </div >
        </>
    );
}

export default SearchField;