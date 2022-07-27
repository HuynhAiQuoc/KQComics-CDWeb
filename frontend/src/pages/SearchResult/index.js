
import './SearchResult.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '~/components/Card';
import Pagination from '~/pages/Browse/Pagination'

import data from '~/data/data.json'

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

function SearchResult() {

    const { t } = useTranslation();

    const [searchParams] = useSearchParams();
    const [textSearch, setTextSearch] = useState('');

    const comicsInPage = 60;
    const [listComics, setListComics] = useState([])

    const [totalPages, setTotalPages] = useState(0)


    const [comics, setComics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);



    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    }

    const getComicsPagination = (startIndex) => {
        console.log(currentPage);
        console.log(totalPages);
        console.log(listComics.length)
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

    useEffect(() => {
        setTextSearch(searchParams.get('text'))
    }, [searchParams])

    useEffect(() => {
        let arr = [];
        data.forEach(comic => {
            if (((comic.title).toLowerCase()).includes(textSearch)) {
                arr.push(comic);
            }
        })
        setListComics(arr);
    }, [textSearch])

    useEffect(() => {
        let t = 0;
        if ((listComics.length) > comicsInPage) {
            t = Math.floor((listComics.length) / comicsInPage) + ((listComics.length % comicsInPage > 0) ? 1 : 0)
        } else {
            t = 1;
        }
        setTotalPages(t);
    }, [listComics])

    useEffect(() => {
        getComicsPagination((currentPage - 1) * comicsInPage);
        window.scrollTo(0, 0);
    }, [currentPage, listComics, totalPages]);


    return (
        <>
            <div className="col-12 spacing-header">
                <div className="row">
                    <div className="border-bottom border-color-white p-0">
                        <div className="background-header search-title d-flex align-items-center ps-md-4 ps-2">
                            <h4 className="text-white m-0">{t('search.title')} "{textSearch}"</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="ps-lg-5 pe-lg-5 ps-md-4 pe-md-4 mt-4">
                        <div className="row">
                            {
                                comics.map(comic => (
                                    <div key={comic.titleNo} className="col-6 col-sm-4 col-md-3 five-columns-search col-xl-2 p-2">
                                        <Card comic={comic} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="mt-3 d-flex justify-content-center">
                        {
                            (totalPages > 1) ?
                                <Pagination
                                    totalPages={totalPages}
                                    currentPage={currentPage}
                                    changePage={handleChangePage}
                                /> :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchResult;