import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

const Breeds = () => {
    const [breeds, setBreeds] = useState([])
    const [search, setSearch] = useState('')
    const filteredBreeds = breeds.filter(el => el.name.includes(search))
    useEffect(() => {
        axios('https://api.thecatapi.com/v1/breeds/')
            .then(res => setBreeds(res.data))
        console.log(breeds)

    }, [])
    return (
        <div className='container mx-auto my-16'>

            <div className="pt-2 relative mx-auto text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full mb-7"
                    type="search" name="search" placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <svg className="text-gray-600 h-4 w-4 fill-current"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966"
                         width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </div>

            <div className="flex flex-wrap -my-3">
                {
                    filteredBreeds.map(item => (

                        <div className='w-1/4 px-3 mb-5' key={item.id}>
                            <Link to={`/breeds/${item.id}`}>

                            <div className=" bg-gray-400 flex justify-center items-center">
                                <div
                                    className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
                                    style={{background: `url(${item?.image?.url}) no-repeat center/contain`}}>
                                    <div className="flex justify-between items-center ml-4 pr-8">
                                        <div
                                            className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some
                                            information
                                        </div>
                                        <div
                                            className="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%
                                        </div>
                                    </div>
                                    <div
                                        className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                                        <h3 className="text-xl font-bold pb-2">{item.name}</h3>
                                        <p className="truncate text-gray-500 text-sm">{item.description}</p>

                                    </div>
                                </div>
                            </div>
                                </Link>

                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default Breeds;