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
                    id: 1,
                    linkUrl:'Computer case'
                },
                {
                    title: 'Cooling',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2,
                    linkUrl:'Cooling'
                },
                {
                    title: 'Motherboards',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3 ,
                    linkUrl:'Motherboards'

                },
                {
                    title: 'Processors',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 4,
                    linkUrl:'Processors'
                },
                {
                    title: 'Video Cards',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 5,
                    linkUrl:'Video Cards'
                },
                {
                    title: 'Power Supplies',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 6,
                    linkUrl:'Power Supplies'
                },
                {
                    title: 'Memory',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 7,
                    linkUrl: 'Memory'
                },
                {
                    title: 'Sound Cards',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: 'large',
                    id: 8,
                    linkUrl: 'Sound Cards'
                },
            ]
        };
    }



    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...othersSectionProps}) => (
                    <MenuItem key={id} {...othersSectionProps} />
                ))}
            </div>
        );

    }

}

export default Directory;