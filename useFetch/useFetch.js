

import { useState, useRef, useEffect } from 'react'

export const useFetch = ( url ) => {

  const isMounted = useRef(true);

  const [state, setState] = useState({ 
    data: null, 
    loading: true, 
    error: null
  })

  useEffect(() => {
    // m'interessa el: quan el component es desmonti
    return () => {
      // aquesta modificació no dispara una nova renderització del component
      isMounted.current = false;
    }
  }, []) // Només al crear el component

  useEffect(() => {
    fetch( url )
      .then( res => res.json() )
      .then( data => {
        // console.log(data);
        if (isMounted.current) {
          // El component està montat i podem modificar el state
          setState({
            data: data,
            loading: false,
            error: null,
          })
        }
      })
      .catch( () => {
        setState({
          data: null,
          loading: false,
          error: "Error loading",
        })
      })
  }, [url])

  return state
}
