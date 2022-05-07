import React from 'react'

interface IProps {
    errors: string[];
}

const Error: React.FC<IProps> = ({ errors }) => {
    return (
        <ul>
            {
                errors.map((err, index) => {
                    return (
                        <li key={index}>
                            {
                                err
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Error