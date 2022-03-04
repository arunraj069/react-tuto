import React,{useEffect, useState} from 'react'
import axios from 'axios';

function SearchBar() {
  const [term, setTerm] = useState('programming');
  const [results,setResult] = useState([]);
  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
        if(term)
        (async ()=>{
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            })
        setResult(data.query.search);
        })()
    },1000);
    return ()=>{
        clearTimeout(timeoutId);
    }
  },[term])
  const renderedList= results.map((result,i)=>{
      return (
          <div className='item' key={i}>
              <div className='right floated content'>
                  <a 
                  className='ui button'
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                  >Go</a>
              </div>
              <div className='content'>
                  <div className='header'>{result.title}</div>
                  {result.snippet}
              </div>
          </div>
      )
  })
  return (
    <div>
      <div className='ui form'>
          <div className='ui field'>
              <label>Enter Search Term</label>
              <input value={term} onChange={e=>setTerm(e.target.value)} className='input'/>
          </div>
      </div>
      <div className='ui celled list'>
          {renderedList}
      </div>
    </div>
  )
}

export default SearchBar
