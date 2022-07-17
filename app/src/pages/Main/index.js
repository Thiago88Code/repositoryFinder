import {useState, useCallback, useEffect}from "react"
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles"
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from "react-icons/fa"
import api from "../../services/axios"
import {Link} from "react-router-dom"


export default function Main(){

    const[newRepo, setNewRepo]=useState("")
    const[repository,setRepository]=useState([])
    const[loading, setLoading] = useState(false)
    const[alert, setAlert] = useState(null)
    

//Buscar
useEffect(()=>{
    function loadStorage(){
        let storage = localStorage.getItem("repos")
        if(storage){
            setRepository(JSON.parse(storage))
        }
        
    }
   
    loadStorage()
    
},[])

//Salvar alteracoes

useEffect(()=>{
    function storageSet(){
        localStorage.setItem("repos", JSON.stringify(repository))
       }
       
    storageSet()
},[repository])



const handleSubmit = useCallback((e)=>{
    e.preventDefault()
       
        async function submit(){
            setLoading(true)

        try{
            if(newRepo === ""){
                throw new Error("Campo Vazio")
            }

            const response = await api.get(`repos/${newRepo}`)
            
            const hasRepo = repository.find( repo => repo.name === newRepo)

            if(hasRepo){
                throw new Error("duplicado")
            }

            /*function hasRepo(){
                repository.forEach( repo =>{
                    if(repo.name === newRepo){
                        throw new Error("duplicado, porra!!")
                    }
                })
            }
            hasRepo()*/
    
                
            const data = {
                name: response.data.full_name

            }

            

            setRepository([...repository,data]) //interessante// traz o repositorio q ja existe e inclui o objeto data
            setNewRepo("")
             
            
            console.log(data)
            
        }catch(error){
            setAlert(true)
            console.log(error)
          
        }finally{
            setLoading(false)
        
        }
    }
   
    submit()


}, [newRepo,repository])


   



function handleInputChange(e){
        setNewRepo(e.target.value)
        setAlert(null)
        
    }

const handleDelete = useCallback((repo)=>{
    const newList = repository.filter(i => i.name !== repo)
    localStorage.removeItem(repo)
    setRepository(newList)


},[repository]);
    



    return(
        
            <Container>
                <h1>
                    <FaGithub size={25} color={"red"}/>
                    My Repositories
                </h1>

                <Form onSubmit={handleSubmit} error = {alert}>
                    
                    <input type={"text"} placeholder="Add repository" 
                    value={newRepo} onChange={(e)=>handleInputChange(e)}/> {/*ou = onChange={handleInputChange} */}
                    
                    <SubmitButton loading={loading? 1 : 0}> 
                        {loading?(
                            <FaSpinner size={14} color="#FFF"/>
                        ) : (
                            <FaPlus size={14} color="#FFF"/> 
                        )
                        }
                       
                        
                    </SubmitButton>
              
                </Form> 

                <List>
                    {repository.map((repo)=>(
                        <li key={repo.name}>
                            
                            <span>
                                <DeleteButton onClick={()=>handleDelete(repo.name)}>
                                    <FaTrash size={14}/>
                                </DeleteButton>
                                {repo.name}
                            </span>
                            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>{/* encripta e torna multiplos parametros em um apenas*/}
                                <FaBars size={20}/>
                            </Link> 
                        </li>
                    
                    ))}
                    
                </List>
 
                
            </Container> 
        
    )
}