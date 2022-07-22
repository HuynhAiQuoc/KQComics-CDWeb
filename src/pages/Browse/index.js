import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter/index.js'
import Pagination from './Pagination'
import Card from '~/components/Card';
import './Browse.css'

import data from '~/data/data.json'

import { useTranslation } from 'react-i18next';

function Browse() {

    const { t } = useTranslation();

    const comicsInPage = 60;

    const [searchParams] = useSearchParams();

    const [initialGenre, setInitialGenre] = useState('');
    const [listComics, setListComics] = useState(() => { return [...data]; });
    const [showFilter, setShowFilter] = useState(false);

    const [textFilterBtn, setTextFilterBtn] = useState(t('browse.showFilterBtn'));
    const [comics, setComics] = useState([]);

    // pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(() => {
        if ((listComics.length) > comicsInPage) {
            return Math.floor((listComics.length) / comicsInPage) + ((listComics.length % comicsInPage > 0) ? 1 : 0)
        } else {
            return 1;
        }
    });

    // filter state
    const [filterType, setFilterType] = useState([]);

    // sort state
    const [sort, setSort] = useState(t('browse.sort.default'));


    useEffect(() => {
        const genre = searchParams.get('genre');
        if (genre) {
            setInitialGenre(genre);
        }
    }, [])


    useEffect(() => {
        sortComics(sort);
        setCurrentPage(1);
    }, [sort])

    useEffect(() => {
        filterComics();
        setCurrentPage(1);
    }, [filterType])

    useEffect(() => {
        setTotalPages(calculateTotalPages(listComics))
        getComicsPagination((currentPage - 1) * comicsInPage);
        window.scrollTo(0, 0);
    }, [currentPage, listComics, sort, filterType, totalPages]);

    useEffect(() => {
        if (showFilter) {
            setTextFilterBtn(t('browse.hiddenFilterBtn'));
        } else {
            setTextFilterBtn(t('browse.showFilterBtn'));
        }
    }, [t])

    const getComicsPagination = (startIndex) => {
        let array = [];
        let temp = ((listComics.length % comicsInPage > 0) && (currentPage === totalPages)) ? (listComics.length % comicsInPage) : comicsInPage;
        if ((listComics.length) <= comicsInPage) {
            temp = listComics.length;
        }
        for (let i = 0; i < temp; i++) {
            array.push(listComics[startIndex + i])
        }
        setComics(array);
    }

    const handleShowFilter = () => {
        setShowFilter(pre => {
            if (pre) {
                setTextFilterBtn(t('browse.showFilterBtn'));
                return false;
            } else {
                setTextFilterBtn(t('browse.hiddenFilterBtn'));
                return true;
            }
        });
    }

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }

    const handleChangeSort = (typeSort) => {
        setSort(typeSort);
    }

    const handleChangeFilterType = (filterType) => {
        setFilterType(filterType);
    }

    const filterComics = () => {
        setListComics([...data])
        if (filterType.length > 0) {
            setListComics(data.filter(e => filterType.includes(e.representGenre)));
        }
    }

    const calculateTotalPages = (lists) => {
        if ((lists.length) > comicsInPage) {
            return Math.floor((lists.length) / comicsInPage) + ((lists.length % comicsInPage > 0) ? 1 : 0)
        } else {
            return 1;
        }
    }

    const sortAlphabet = (a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    }

    const sortAlphabetRevers = (a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return -1;
        }
        return 0;
    }

    const sortComics = (typeSort) => {
        switch (typeSort) {
            case t('browse.sort.az'):
                setListComics(listComics.sort(sortAlphabet));
                break;
            case t('browse.sort.za'):
                setListComics(listComics.sort(sortAlphabetRevers));
                break;
            case t('browse.sort.popularity'):
                setListComics(listComics.sort((a, b) => {
                    return b.readCount - a.readCount;
                }));
                break;
            case t('browse.sort.unpopular'):
                setListComics(listComics.sort((a, b) => {
                    return a.readCount - b.readCount;
                }));
                break;
            case t('browse.sort.default'):
                setListComics(listComics);
                break;
            default: break;
        }
    }

    return (
        <>
            <div className="col-md-12 col-lg-9">
                <div className="ps-xl-5 pe-xl-5 spacing-header">
                    <div className="row">
                        <div className="mt-4 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center">
                                    <button className="d-lg-none d-block btn btn-previous text-white me-2">
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </button>

                                    <div className="title">
                                        {/* <h4 className="text-white mb-1">Manga</h4> */}
                                    </div>
                                </div>

                                <button
                                    className="d-lg-none d-flex filter-btn bg-transparent text-yellow border border-color-yellow rounded-3"
                                    onClick={handleShowFilter}
                                >
                                    {textFilterBtn}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 d-lg-none d-block p-0">
                            <div className={showFilter ? `d-block` : `d-none`}>
                                <Filter
                                    initialGenre={initialGenre}
                                    handleChangeSort={handleChangeSort}
                                    handleChangeFilterType={handleChangeFilterType}
                                />
                            </div>
                        </div >
                    </div>

                    <div className="row">
                        {
                            (comics.length === 0)
                                ?
                                (<FontAwesomeIcon icon={faSpinner} className="loading-icon" />)
                                :
                                (
                                    comics.map((comic) => (
                                        <div key={comic.titleNo} className="col-6 col-sm-4 col-md-3 five-columns p-2">
                                            <Card comic={comic} />
                                        </div>
                                    ))
                                )
                        }
                    </div>

                    <div className="row">
                        <div className="d-flex justify-content-center mt-4 mb-4">
                            {
                                (totalPages > 1) ? <Pagination totalPages={totalPages}
                                    currentPage={currentPage}
                                    changePage={handleChangePage} /> : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 d-lg-block d-none p-0">
                <div className="height-filter spacing-header overflow-auto fixed-custom width-inherit">
                    <div className="border-start border-color-white h-100">
                        <Filter
                            initialGenre={initialGenre}
                            handleChangeSort={handleChangeSort}
                            handleChangeFilterType={handleChangeFilterType}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Browse;