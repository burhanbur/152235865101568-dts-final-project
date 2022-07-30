import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore"; import "../styles/Dashboard.css";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const signOut = () => {
        logout();
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");

        const fetchUserName = async () => {
            try {
                const q = query(collection(db, "users"), where("uid", "==", user?.uid));
                const doc = await getDocs(q);
                console.log(doc.docs);
                const data = doc.docs[0].data();
                setName(data.name);
            } catch (err) {
                console.error(err);
                // alert(err);
            }
        };

        fetchUserName();
    }, [user, loading, error, navigate]);

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                Logged in as
                <div>{name ? (<>{name}</>) : (<></>)}</div>
                <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={signOut}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default Dashboard;