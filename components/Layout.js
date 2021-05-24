import { Fragment } from "react"
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}) =>{
    return(
        <Fragment>
            <div id="site" className="no-select">
                <Header />
                    <main>
                        {children}
                    </main>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout;