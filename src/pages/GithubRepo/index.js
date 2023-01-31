import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getApi } from "../../helpers/getApi";

const GithubRepo = () => {
    const { repoInfo } = useParams();
    const { userName } = useParams();

    const [ repo, setRepo ] = useState([]);

    const fetchRepo = async() => {
        const response = await getApi(`https://api.github.com/repos/${userName}/${repoInfo}/contents/`);

        setRepo(response)
    }

    useEffect(() => {
        fetchRepo();
    }, [])

    return (
        <section className="repo-ctn">
            <h1 className="repo-user">
              {userName}
            </h1>
            <section className="repo-box">
              {repo.length > 0 &&
               repo.map((element) => (
                <div className="repo-dscrp">
                    {/* <div className="repo-inf"> */}
                       <h3>{element.name}</h3>
                    {/* </div> */}
                </div>    
               ))}
            </section>
        </section>
    )
}

export default GithubRepo