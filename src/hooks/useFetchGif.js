import { useEffect, useState } from 'react'
import {getGif} from '../helpers/getGif'


export const useFetchGif = (category) => {

        const [state, setstate] = useState({

            data: [],
            loading: true
        });
        
        useEffect(()=>{

            getGif(category).then(img => {

                   
                    setstate({
                        data: img,
                        loading: false
                    });

               

            });
            
         }, [category])
    

        return state; // eso es la {data: [], loading: true} la informacion que esta dentro


}
