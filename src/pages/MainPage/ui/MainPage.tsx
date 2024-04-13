import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            <BugButton />
            {t('main')}
        </div>
    );
};

export default MainPage;
