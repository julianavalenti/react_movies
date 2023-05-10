import {useState} from "react"

const Form = (props) => {

    const [formState, setFormState] = useState({
        searchterm: "",
    })
    
    const handleChange = (event) => {
        setFormState({searchterm: event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault ()
        //pass the search term submission
        props.getMovie(formState.searchterm)
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
    }
  
export default Form;
    
  
  
