import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    },[])
    return <></>;
};

export default Contact;
