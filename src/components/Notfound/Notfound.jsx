import React, { useEffect, useState } from 'react'
import Style from "./Notfound.module.css"
export default function Notfound() {
    const [Count, setCount] = useState(0)
    useEffect(() => { }, [])
    return (
        <div>
            <h1 > not found</h1>
        </div>
    )
}
