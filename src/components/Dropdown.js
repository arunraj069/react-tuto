import React,{useEffect, useState, useRef} from 'react'

function Dropdown({ label, options, selected, onChangeSelection}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  const optionRender = options.map((option,i)=>{
    if(selected.value === option.value){ 
        return null;
    }
    return (
        <div 
        className='item' 
        key={option.value}
        onClick={()=>onChangeSelection(option)}
        >
            {option.label}
        </div>
    )
  })
  return (
    <div className='ui form' ref={ref}>
        <div className='field'>
            <label className='label'>{label}</label>
            <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ?'visible active':''}`}>
                <i className='dropdown icon'></i>
                <div className='text'>{selected.label}</div>
                <div className={`menu ${open ? 'visible transition' : ''}`}>{optionRender}</div>
            </div>
        </div>
      
    </div>
  )
}

export default Dropdown
