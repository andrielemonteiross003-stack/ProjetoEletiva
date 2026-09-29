import { Outlet } from "react-router";
import NavBar from "./components";

export default function Root() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}