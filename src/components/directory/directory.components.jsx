import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import "./directory.styles.scss";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Computer case',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Cooling',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2
                },
                {
                    title: 'Motherboards',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3
                },
                {
                    title: 'Processors',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Video Cards',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 5
                },
            ]
        };
    }



    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );

    }

}

export default Directory;