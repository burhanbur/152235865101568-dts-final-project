import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { auth } from "../config/firebase";

const Detail = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const { content, title, image, author } = location.state;

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
    }, [user, loading, error, navigate]);

    return (
        <div class="mt-6 bg-gray-50">
            <div class=" px-10 py-6 mx-auto">

                <Link to="#" className="block transition duration-200 ease-out transform hover:scale-110">
                    <img alt="Placeholder" className="object-cover w-full shadow-sm h-full" src={image} />
                </Link>

                <div className="mt-2">
                    <Link to="#"
                        className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">{title}</Link>

                    <div className="font-light text-gray-600">

                        <Link to="#" className="flex items-center mt-6 mb-6"><img
                            src="https://avatars.githubusercontent.com/u/71964085?v=4"
                            alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                            <h1 className="font-bold text-gray-700 hover:underline">By {author}</h1>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
                <p className="mt-2 p-8">{content}</p>
            </div>
        </div>
    )
};

export default Detail