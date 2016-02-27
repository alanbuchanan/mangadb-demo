import React from 'react';
import Header from '../components/Header';
import $ from 'jquery';
import dummyData from '../../../data/dummy_data'; // This will be brought in from db

export default class User extends React.Component {

    componentDidMount() {
        console.log(dummyData)
    }

    render() {

        let { username } = this.props;

        let getElementProps = mangaItem => {
            return (
                <div>
                    <img src={mangaItem.thumbnail} alt=""/>
                    <h4>{mangaItem.title}</h4>
                </div>
            )
        };

        let listOfUsersManga = (
            dummyData.map((element, index) => {
                return <a href={element.url}><li key={index}>{getElementProps(element)}</li></a>
            })
        );

        return (
            <div>
                <Header />
                <div class="page-user container">
                    <button class="btn btn-success"><i class="fa fa-plus-circle"></i> Add</button>

                    <ul>
                        {listOfUsersManga}
                    </ul>

                </div>
            </div>
        )
    }
};