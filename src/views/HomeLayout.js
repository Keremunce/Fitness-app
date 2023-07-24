import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function HomeLayout() {
    const { appRef } = useContext(GlobalContext);

    return (
        <>
            <h1>HomeLayout - in development</h1>
            <div ref={appRef} className="App">
                <main className="screen">
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    )
}