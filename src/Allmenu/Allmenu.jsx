import React from 'react';
import { useState } from 'react';
import Singlefood from '../Component/Singlefood';
import { useEffect } from 'react';
import HelmetTitle from '../HelmetTitle';
import "./menu.css"

const Allmenu = () => {
    const [menu, setMenu] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [count, setCount] = useState(20)


    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)
    console.log(numberOfPages)
    useEffect(() => {
        fetch('https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/menucount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])
    console.log(currentPage,itemsPerPage)
    useEffect(() => {
        fetch(`https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/pagemenu?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [currentPage, itemsPerPage]);
    
    console.log(currentPage)
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }



    return (
        <div className='base-300' >
            <HelmetTitle title="All Menu" />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl  py-5 text-neutral-content text-center font-semibold'>All Menu</h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {menu.map(food => {
                        return (
                            <Singlefood key={food._id} food={food} />
                        )
                    })}

                </div>

            </div>
            <div className='pagination'>
                <p className='text-neutral-content'>Current page: {currentPage}</p>
                <button className='text-neutral-content' onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected text-neutral-content' : undefined} 
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button className='text-neutral-content' onClick={handleNextPage}>Next</button>
                <select  className='text-neutral-content' value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option  className='text-neutral-content' value="5">5</option>
                    <option  className='text-neutral-content' value="10">10</option>
                    <option  className='text-neutral-content' value="20">20</option>
                    <option  className='text-neutral-content' value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Allmenu;