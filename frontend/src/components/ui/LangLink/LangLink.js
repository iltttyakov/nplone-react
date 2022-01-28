import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const LangLink = ({children, to, className = ''}) => {
    const {i18n} = useTranslation()
    const [link, setLink] = useState(to)

    useEffect(() => {
        setLink(i18n.language === 'en' ? to : `/${i18n.language}${to}`)
    }, [i18n.language])


    return (
        <Link to={link} className={className}>
            {children}
        </Link>
    );
};

export default LangLink;