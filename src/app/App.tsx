import React, { Suspense } from 'react';
import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={t('loading')}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
