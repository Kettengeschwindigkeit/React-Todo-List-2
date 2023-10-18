import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    return (
        <>
            <h1>Information page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis sequi rerum suscipit maxime odio minima dolore explicabo, eum exercitationem laborum magnam facilis iusto, nihil laboriosam neque? Nesciunt, sapiente ea?
            </p>
            <button className="btn" onClick={() => history.push('/')}>Back to Todo List</button>
        </>
    )
}
