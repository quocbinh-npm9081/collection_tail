import React from 'react'
import { useParams } from 'react-router-dom';

const generatePage = (name: string) => {

    const page = () => require(`../pages/${name}`).default;

    try {

        return React.createElement(page());

    } catch (error) {

        return <h2>Page Not Found</h2>
    }

}


const PageRender = () => {

    const { page, id }: any = useParams();

    let name = '';

    if (page !== undefined) {

        name = id ? `${page}/${id}` : `${page}`;

    } else {

        name = 'home';

    }

    return (
        generatePage(name)
    )
}

export default PageRender;