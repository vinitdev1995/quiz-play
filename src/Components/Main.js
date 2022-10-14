import React, {lazy, Suspense} from 'react';

const HomePage = lazy(() =>
    import(
        /* webpackChunkName: "Home" */
        './Home'
        )
);

const MovieApp = lazy(() =>
    import(
        /* webpackChunkName: "MovieApp" */
        "./MovieApp/MovieApp"
        )
);

const Main = () => {
    let isPromo = window.location.search.toLocaleLowerCase().includes('gclid');
    if (isPromo) {
        sessionStorage.setItem('prm', '1');
        window.location.href = window.location.origin;
    }
    if (sessionStorage.getItem('prm') === '1') {
        isPromo = true;
    }

    return (
        <Suspense fallback={<div>Loading..</div>}>
            {
                isPromo ? <HomePage/> : <MovieApp/>
            }
        </Suspense>
    );
};

export default Main;