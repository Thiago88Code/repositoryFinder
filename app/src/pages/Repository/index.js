import { useEffect,useState } from "react"
import {Container, Owner, Loading, BackLink, IssuesList, Pagination, FilterIssuesList} from "./styles"
import api from "../../services/axios"
import {FaArrowLeft} from "react-icons/fa"




export default function Repository({match}){

    const[repository, setRepository] = useState({})
    const[issue, setIssue] = useState([])
    const[loading,setLoading]=useState(true)
    const[page, setPage] = useState(1)
    const[filterIssue, setFilterIssue] = useState ("all")
    


    useEffect(()=>{

        async function load(){
            
            const nameRepo = decodeURIComponent(match.params.repository)
           
            const [repositoryData, issueData] = await Promise.all([
                api.get(`repos/${nameRepo}`),
                api.get(`repos/${nameRepo}/issues`,{ //interessante, coisa do axios//
                    params:{
                        state: filterIssue,
                        per_page: 5 // ver isso
                    }
                })
            ])

            setRepository(repositoryData.data)
            setIssue(issueData.data)
            setLoading(false)
            
        }

        load()

    },[match.params.repository, filterIssue])

    useEffect(()=>{//paginaçao
        async function loadIssues(){
            const nameRepo = decodeURIComponent(match.params.repository)
            
            const response = await api.get(`/repos/${nameRepo}/issues`,{
            params:{
                state: filterIssue,
                page:page,
                per_page: 5,
                
            },
        })
            setIssue(response.data)
        }
        loadIssues()
    },[match.params.repository, page, filterIssue])

    function handlePages(action){
      setPage(action === "back"? page - 1 : page + 1)  
    }


function handleIssues(e){
setFilterIssue(e.target.value)
setPage(1)

}

    if(loading){
        return(
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )
       
    }

        return(

            <Container>
                <BackLink to={"/"}>
                    <FaArrowLeft size={30} color={"#0d2636"}/>
                </BackLink>
                    
                <Owner>
                    <img src={repository.owner.avatar_url} 
                    alt={"repositorio.owner.login"}/>
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner> 
                <FilterIssuesList>
                   <button value={"all"} onClick={handleIssues}>All</button>
                   <button value={"open"} onClick={handleIssues}>Open</button>
                   <button value={"closed"} onClick={handleIssues}>Closed</button>
                   <span> {`${filterIssue} issues.`}</span>
                </FilterIssuesList>
                
                <IssuesList>
                
                    {issue.map(i => (
                        <li key={String(i.id)}>
                            <img src={i.user.avatar_url} alt={i.user.login}/>

                                <div>
                                    <strong>
                                        <a href={i.html_url}>{i.title}</a>
                                        {i.labels.map(label=>(
                                            <span key={String(label.id)}>{label.name}</span>
                                        ))}
                                    </strong>
                                    <p>{i.user.login}</p>
                                </div>


                        </li>
                     ))}

                </IssuesList>

                <Pagination>
                    
                        <button type="button"
                        onClick={()=>handlePages("back")}
                        disabled = {page === 1}> {/*interessante. disabled é booleano*/}
                            Back
                        </button>
                        <span>{page}</span>
                        <button type="button" onClick={()=>handlePages("next")}>Next</button>
                        
                                            
                        
                </Pagination>
            
            </Container>
                
            
        
        
    )
}