import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            {t('rest')}
            {t('main')}
        </div>
    );
};

export default MainPage;
