import React,{ useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
      label: "Arabic",
      value :"ar"
    },
    {
      label: "Hindi",
      value :"hi"
    },
    {
      label: "Malayalam",
      value :"ml"
    },
  ]

function Translate() {
  const [language,setLanguage] = useState(options[0]);
  const [text,setText] = useState('');
  return (
    <div>
    <div className='ui form'>
        <div className='ui field'>
          <label>Enter your text</label>
          <input value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown 
      label = 'Select a Language'
      options={options}
      selected= {language} 
      onChangeSelection={setLanguage}
      />
      <hr></hr>
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language}/>
    </div>
  )
}

export default Translate
