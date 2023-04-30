import {useEffect, useState} from 'react'

export const Title = ({titleText}) =>{

    let update_underscore = false
    
    if(titleText===undefined){
        titleText=''
    }
    let [titleState, setTitleState] = useState(0);
    let [underscoreState, setUnderscoreState] = useState(false);

    useEffect(()=>{
        const timeoutId = setInterval(() => {
            
            if(titleText.length<=titleState){
                setUnderscoreState(true);
                console.log("clear interval")
                clearInterval(timeoutId);
            }
            else{
                setTitleState(titleState+1);
            }
        }, 100)

        return ()=>clearInterval(timeoutId)
    }, [titleState,titleText])

    useEffect(()=>{
        setTitleState(0)
    },[titleText])

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setUnderscoreState(prev => !prev);
        },500)

        return () => {clearInterval(intervalId);};
    },[])

    return <h1 className="custom_title">{titleText.substring(0,titleState)}{underscoreState ? "\u00A0" : '_'}</h1>
}