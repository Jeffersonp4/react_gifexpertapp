// rafc = snipet para crear componente facilmente

import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    // const handleApp = () =>{

    //     // setCategories([...categories , 'HunterXHunter'])

    //     setCategories( cats => [...cats , 'Naruto'])
    // }

    return (
        <>

        <h1>GifExpertApp</h1>
        <AddCategory setCategories={ setCategories} />
        <hr/>
       
        <ol>
            {
                categories.map( category => (
                
                    <GifGrid 
                    
                        key={category}
                        category={category}
                    />

                    
                
                ))

            }
            
        </ol>

        </>
    )
}


export default GifExpertApp
