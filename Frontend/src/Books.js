import {useEffect, useState} from 'react'
import axios from 'axios'
import './global.css'
import {Title} from './Title'

const ApiObject = ({hidden,id,title,description,author}) => {

  let hiddenClass = hidden ? "custom_card hide" : "custom_card"

  return(
  <div className={hiddenClass}>
    <svg viewBox="0 0 100 100" className="bookmark">
      <path fill="#0F0" d="M0 0 L0 110 L50 80 L100 110 L100 0 Z"/>
    </svg>
    <h3>{title}</h3>
    <p>id: {id}</p>
  </div>)
}

const ApiListObj = ({apiContent}) => {
  
  let [shownObjects, setshownObjects] = useState(0)

  useEffect(() =>{

    const intervalID2 = setTimeout(()=>{

      
      setshownObjects(prev=>{
        if(prev < apiContent.length){
          return prev+1;
        }
        return prev;
        });
    },shownObjects > 20 ? 0 : (apiContent.length-shownObjects)*(apiContent.length-shownObjects)*300/(apiContent.length*apiContent.length) +50)

    return () => clearInterval(intervalID2);

  },[apiContent,shownObjects])

  return (
    <>
      <div className="custom_container">
        {apiContent !== [] && apiContent.map((x,i) => <ApiObject key={x.id} hidden={i>=shownObjects} {...x}/>) }
      </div>
    </>
  );
}




function Books() {

  let [state, setState] = useState({title: "", content: []})

  useEffect(() => {
    const fetchRequest = async () => {
      let returnedObj;
      try {
        returnedObj = await (await axios.get("http://localhost:3002/api")).data
        returnedObj = {
          title: "Data from http://localhost:3002/api",
          content: returnedObj
        }
      }
      catch(e){
        returnedObj = {
          title: "No se ha podido cargar la información",
          content: []
        }
      }

      setState(returnedObj);
    }
    fetchRequest()

  }, [])

  return (
    <div className="books">
      <Title titleText={state.title}/>
      <ApiListObj apiContent={state.content}/>
    </div>
  );
}

export default Books;
