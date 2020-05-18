import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get('https://api.github.com/users/krboelter')
            .then(res => {
                // console.log(res)
                const repos = res.data.repos_url
                axios.get(repos)
                    .then(res => {
                        console.log(res, 'repositories')
                        setProjects(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {/* {projects.map((project, index) => (
                <div key={index}>{project}</div>
            ))} */}
        </div>
    )
}
