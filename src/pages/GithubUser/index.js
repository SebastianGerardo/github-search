import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getApi } from '../../helpers/getApi';
import blog from '../../img/blog.png';
import company from '../../img/company.png';
import followers from '../../img/followers.png';
import location from '../../img/location.png';
import twitter from '../../img/twitter.png';

const GithubUser = () => {
    const { userName } = useParams();
    const history = useNavigate();

    const [ user, setUser  ] = useState({})
    const [ repos, setRepos ] = useState([]);

    const fetchUser = async () => {
        const response = await getApi(`https://api.github.com/users/${userName}`)

        setUser(response);
    }

    const fetchRepos = async() => {
        const response = await getApi(`https://api.github.com/users/${userName}/repos?sort=created`)
    
        setRepos(response);
    }

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        fetchRepos();
    }, [])

    return (
        <section className='box-user'>
            <div className='user-dscrp'>
                <button className='btn-navigate' onClick={() => history(-1)}>Atras</button>

                <div className='user-avatar-box'>
                    <img src={user.avatar_url} alt={user.login} className="user-avatar"/>
                </div>
                <h1 className='user-name--'>{user.name}</h1>
                <h2 className='user-login'>{user.login}</h2>
                <button className='btn-edit'>Edit Profile</button>
                <ul className='list-dscrp'>
                    <li className='dscrp'>
                        <div>
                            <div className='icon'><img src={followers} alt="" className='icon-img'/></div>
                            <p>
                                <span>{user.followers} followers</span> . <span>{user.following} following</span>
                            </p>
                        </div>
                    </li>
                    <li className='dscrp'>
                        <div>
                            <div className='icon'><img src={company} alt="" className='icon-img'/></div>
                            <p>{user.company}</p>
                        </div>
                    </li>
                    <li className='dscrp'>
                        <div>
                            <div className='icon'><img src={location} alt="" className='icon-img'/></div>
                            <p>{user.location}</p>
                        </div>
                    </li>
                    <li className='dscrp'>
                        <div>
                            <div className='icon'><img src={blog} alt="" className='icon-img'/></div>
                            <p>{user.blog}</p>
                        </div>
                    </li>
                    <li className='dscrp'>
                        <div>
                            <div className='icon'><img src={twitter} alt="" className='icon-img'/></div>
                            <p>{user.twitter_username}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='user-repo'>
                <h1 className='ttl-repo'>Repositories</h1>
                {repos.length > 0 && 
                 repos.map((element) => (
                <Link className='repo-drc' to={`/repos/${userName}/${element.name}`}>
                    <div className="card-user">
                        <div className="repo-name">
                            <h1 className='ttl-user'>{element.name}</h1>
                            <p>{element.language}</p>
                        </div>
                    </div>
                </Link>
                 ))}
            </div>
        </section>
    )
}

export default GithubUser