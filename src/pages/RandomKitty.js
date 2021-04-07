import React, {useState, useEffect} from 'react';
import axios from 'axios'

const RandomKitty = () => {
    const [kitty, setKitty] = useState({})

    const getKitty = () => {
        axios('https://api.thecatapi.com/v1/images/search')
            .then((res) => setKitty(res.data[0]))
    }
    useEffect(() => {
        getKitty()
    }, [])
    return (
        <div className='container mx-auto my-16 '>
            <img src={kitty.url} alt="" className='h-56 mx-auto'/>
            <button type="button"
                    onClick={getKitty}
                    className="focus:outline-none text-green-600 text-sm py-2.5 px-5 rounded-md border border-green-600 hover:bg-green-50 flex items-center mx-auto mt-6">

                Random cat
            </button>
        </div>
    );
};

export default RandomKitty;