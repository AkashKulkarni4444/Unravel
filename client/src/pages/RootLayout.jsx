import { Fragment, useEffect} from "react";
import {Outlet} from "react-router-dom"

function RootLayout(){
    

    return(
    
    <Fragment>  

            {/* <Header/> */}
            <Outlet/>
            <h1>Root Of All</h1>
            {/* <Footer/> */}
      
    </Fragment> 
    
    )
}

export default RootLayout;
