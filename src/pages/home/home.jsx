import React from "react";
import M from 'mediaspace'
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const apiKey = import.meta.env.VITE_MEDIASPACE_API_KEY

function Home(){
    const ref = useRef()
    const [ m, setM ] = useState(null)

    useEffect(() => {
        const m = new M(ref.current, {apiKey})
        setM(m)
    }, [])

    return (
        <div id="page-home" className="page">
            <div className="page-container">
                <div className="photos" ref={ref}>

                </div>
            </div>
        </div>
    )
}

export default Home