import React from 'react';
import HomepageBtn from './Btn/HomepageBtn';
import PreBtn from './Btn/PreBtn';

const Header=()=>{
    return(
     <header className="flex justify-between w-full top-0  ">
     <HomepageBtn/>
     <PreBtn  bgcolor="secondary_light" active="secondary" />
     </header>
    );
}

export default Header;


