import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getApi } from '../../helpers/getApi'

const GithubResults = () => {
    const {name} = useParams();
    const history = useNavigate();

    const [ githubUser, setGithubUser ] = useState([]);

    const fetchUser = async () => {
        const response = await getApi(`https://api.github.com/search/users?q=${name}`)

        setGithubUser(response.items);
    }

    useEffect(() => {
        fetchUser();
      }, []);

    return (
        <section className="container-user">
        <button className='btn-navigate' onClick={() => history(-1)}>Atras</button>
        <h1 className="title-card-user">Resultado de la busqueda del usuario: @{name}</h1>
            {githubUser.length > 0 &&
             githubUser.map((element) => (
                        <Link style={{textDecoration: "none", width: "100%"}} to={`/user/${element.login}`}>
                            <div className="card-user">
                                <div className="user-img-box">
                                    <img className="user-img" src={element.avatar_url} alt={element.login}/>
                                </div>
                                <div className="user-name">
                                    <h1>{element.login}</h1>
                                </div>
                            </div>
                        </Link>
             ))}
        </section>
    )
}

export default GithubResults