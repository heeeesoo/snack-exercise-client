'use client'
import { useState, useEffect } from 'react'

interface GroupCardProps {
    groupId : number;
}

// useEffect hook data fetch group mission card
export default function GroupCard({
    groupId
} : GroupCardProps) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    
    return (
        <div>GroupCard {groupId}</div>
    )
}
