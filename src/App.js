import React,{useState} from 'react';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: "What is a React?",
        content: "React is a javascripti library"
    },
    {
        title: "How React is used?",
        content: "React is a used as components"
    },
    {
        title: "Why React?",
        content : "Its popular amount developers"
    }
]
const options = [
  {
    label: "Red Color",
    value :"red"
  },
  {
    label: "Yellow Color",
    value :"yellow"
  },
  {
    label: "Blue Color",
    value :"blue"
  },
  {
    label: "Green Color",
    value :"green"
  }
]
function App() {
  const [selected, onSelection] = useState(options[0]);
  const [showDropdown, onshowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <SearchBar /> */}
      {/* <button onClick={()=>onshowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {
        showDropdown ?
        <>
        <Dropdown 
        label='Select a color'
        options={options}
        selected={selected}
        onChangeSelection={onSelection}
        />
        <label style={{color:selected.value}}>The selected color : {selected.value}</label> 
        </>
        : null
      } */}
      <Translate />
    </div>
  )
}

export default App
