import React from 'react';
import Link from './Link';

function Header() {
  return (
    <div className='ui secondary poiner menu'>
        <Link href='/' className='item'>
            Accordion
        </Link>
        <Link href='/dropdown' className='item'>
            Dropdown
        </Link>
        <Link href='/translate' className='item'>
            Translate
        </Link>
      
    </div>
  )
}

export default Header