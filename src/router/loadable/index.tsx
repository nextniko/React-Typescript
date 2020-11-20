// import React from 'react';
import Loadable from '@loadable/component';
const Watch = Loadable(()=>import('@/pages/watch/index')) 
const One = Loadable(()=>import('@/pages/watch/one/index'))
const Two = Loadable(()=>import('@/pages/watch/two/index'))
const WatchClone = Loadable(()=>import('@/pages/watchClone/index'))
const routes = [
    {
        exact:true,
        Redirect:true,
        path: "/Watch",
        component: Watch,
        children:[
            {
                path: "/Watch/One",
                component: One
            },
            {
                path: "/Watch/Two",
                component: Two
            }
        ]
    },
    {
        path: "/WatchClone",
        component: WatchClone
    },
]
export default routes