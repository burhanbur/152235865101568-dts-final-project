import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import Detail from './Detail';
import axios from 'axios';

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const token = "57c5ac8046424496b8d4b28ae98f11b1";
    const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=";

    const getNews = () => {
        axios.get(url + token).then(
            (response) => {
                // console.log(response)
                setData(response.data.articles);
            })
    };

    useEffect(() => {
        if (loading) return;
        // if (!user) return navigate("/login");
        getNews();
    }, [user, loading, error, navigate]);

    return (
        <div className="flex flex-col">
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {data.map((value) => {
                        return (

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <Link to={<Detail />}>
                                        <img alt="Placeholder" className="block h-auto w-full" src={value.urlToImage ? value.urlToImage : "https://picsum.photos/600/400/?random"} />
                                    </Link>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <Link className="no-underline hover:underline text-black" to={`/detail`} state={{ content: `${value.content}`, title: `${value.title}`, image: `${value.urlToImage}`, author: `${value.author}` }}>
                                                {value.title}
                                            </Link>
                                        </h1>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <Link to={<Detail />} className="flex items-center no-underline hover:underline text-black">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                {value.author}
                                            </p>
                                        </Link>
                                    </footer>

                                </article>

                            </div>
                        );
                    })}

                </div>
            </div>
        </div >


    );
}

export default Dashboard;