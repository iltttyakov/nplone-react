import React, {useEffect} from 'react';
import Page from "../../ui/Page/Page";
import {useTranslation} from "react-i18next";
import seo from "../../../helpers/seo";


const Legal = () => {
    const {t} = useTranslation('Legal')

    useEffect(() => {
        seo({
            title: t('Legal & Impressum'),
            hrefLangEn: 'https://nplone.com/legal-and-impressum',
            hrefLangDe: 'https://nplone.com/de_de/legal-and-impressum',
        })
    }, [])


    return (
        <Page.Content>
            <Page.Title>{t('Legal & Impressum')}</Page.Title>
            <Page.Text>
                <p>{t('Documents')}</p>
                <p>
                    <a target={'_blank'}
                       href="https://docs.google.com/document/d/1KCimOtwzVsRvL2OoJ9PVzJTF2fhCDvCvG_jxymf4WQU/edit?usp=sharing">
                        {t('Data protection declaration (website)')}
                    </a><br/>
                    <a target={'_blank'}
                       href="https://docs.google.com/document/d/1KCimOtwzVsRvL2OoJ9PVzJTF2fhCDvCvG_jxymf4WQU/edit?usp=sharing">
                        {t('Terms and Conditions (website)')}
                    </a>
                </p>
                <p>
                    {t('Address:')}<br/>
                    N + 1 Finance AG<br/>
                    Eichhornstrasse 3<br/>
                    Berlin, BE 10785<br/>
                </p>
                <p>
                    {t('Authorized representative:')}<br/>
                    {t('Aleksandr Palchikov, Managing Director (business address see above)')}<br/>
                    <a target={'_blank'} href="https://www.linkedin.com/in/aleksandr-palchikov/">
                        https://www.linkedin.com/in/aleksandr-palchikov/
                    </a>
                </p>
                <p>
                    {t('Company registration number')}:<br/>
                    {t('In the process of obtaining a license')}: {t('Concept testing stage.')}
                </p>
                <p>
                    {t('VAT number')}:<br/>
                    {t('In the process of obtaining a license')}: {t('Concept testing stage.')}
                </p>
            </Page.Text>
        </Page.Content>
    );
};

export default Legal;