import axios  from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID wAiPs9bccVmKPevBNljhRlE0XjyY9YHeKyvaSPt-aQ4'
      }
});