import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/client');
    },[])
    return <></>;
};

export default Contact;
