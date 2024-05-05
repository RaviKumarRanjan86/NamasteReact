import React, { Suspense } from "react";


const LazyComponent = React.lazy(() => import('./LazyComponent'));

function LazyLoading() {
  return (
    <div>
        <div>Lazy Loading Component Final</div>
        <Suspense fallback={<h1>Loading ...</h1>}>
            <LazyComponent/>
        </Suspense>
    </div>
  )
}

export default LazyLoading