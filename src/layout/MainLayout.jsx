import Header from "../components/Header";
import { Outlet } from "react-router";
const MainLayout = ()=>{

    return(
        <section className="">
            <Header/>
            <Outlet/>
        </section>
    );

}

export default MainLayout;