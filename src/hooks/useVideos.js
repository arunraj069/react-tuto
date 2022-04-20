import {useState,useEffect} from 'react';
import axios from "../components/api/axios";

function useVideos(defaultSearchTerm) {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        search(defaultSearchTerm);
      },[defaultSearchTerm]);
    const search= async (term)=>{
        const response = await axios.get('/search',{
            params: {
                q : term
            },
        });
        setVideos(response.data.items);
    }
    return [videos,search];
}

export default useVideos;
