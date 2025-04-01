import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {

    return <>
        <main >
            <Navbar />
            <div className=" pt-[35px] pb-6">
                <Outlet></Outlet>
            </div>

            <Footer />
        </main>

    </>
}
