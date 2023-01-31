import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeSearch from "../pages/GithubFinder"
import GithubRepo from "../pages/GithubRepo"
import GithubResults from "../pages/GithubResults"
import GithubUser from "../pages/GithubUser"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSearch />} />
                <Route path="/users/:name" element={<GithubResults />}/>
                <Route path="/user/:userName" element={<GithubUser />}/>
                <Route path="/repos/:userName/:repoInfo" element={<GithubRepo />}/>
            </Routes>
        </BrowserRouter>
    )
}