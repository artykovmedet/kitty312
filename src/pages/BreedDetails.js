import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../components/Spinner";


const BreedDetails = () => {
    const {id} = useParams()
    const [breed, setBreed] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios(`https://api.thecatapi.com/v1/breeds`)
            .then(res => {
                setBreed(res.data.find(el => el.id === id))
                setIsLoading(false)
            })
    }, [])


    if (isLoading) return <Spinner/>
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-auto">
            {
                <div>
                    <img className="w-full" src={breed?.image?.url} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{breed.name}</div>
                        <p className="text-grey-darker text-base">
                            {breed.description}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                       <span
                           className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm  text-grey-darker mr-2">{breed.life_span}  </span>
                        <span
                            className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm  text-grey-darker mr-2">{breed.origin}</span>
                        <span
                            className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm  text-grey-darker">{breed.natural}</span>
                    </div>
                </div>}
        </div>
    );
};

export default BreedDetails;