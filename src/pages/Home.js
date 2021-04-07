import React from 'react';

const Home = () => {
    return (
<div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen">
        <div className="container mx-auto p-20 text-center">
        <header>
            <div className="header-content mx-auto ">
                <div className="header-content-inner">
                    <h1 className="text-8xl text-purple-700">Cats for sales</h1>
                    <p className="mt-10 mb-10 text-black-500">We can find only very good cats</p>
                    <a href="#" className="text-3xl">
                        <button className="bg-green-500 ... px-5 py-5">Buy now</button>
                    </a>

                </div>
            </div>
        </header>
        </div>
</div>
    );
};

export default Home;