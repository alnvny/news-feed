import React, { Component } from 'react';
import './App.css';
import { from } from 'rxjs';
import List from './List';
import SearchBar from './SearchBar/SearchBar';
import SideDrawer from './SideDrawer/SideDrawer';
const config =require ('./Config.json');
class SearchAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            search: '',
            sideDrawerOpen: false,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    getData = key => {
        this.setState(
            {
                sideDrawerOpen: false
            })
        this.fetchData(key);
    }
    componentDidMount() {
        let key = 1;
        this.fetchData(key);
    };
    fetchData = (selectedRange) => {
        fetch(`${config.api}${selectedRange}.json?api-key=${config.api_token}`)
            .then(res => {
                let promise = res.json();
                from(promise).subscribe(data => {
                    this.setState({
                        items: data.results
                    })
                })
            }
            )
    }
    searchFilter = e => {
        this.setState(
            {
                search: e.target.value
            })
    };
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    };
    render() {
        const { search } = this.state;
        let items = this.state.items;
        if (search) {
            items = items.filter(item =>
                item.abstract.toLowerCase().includes(search.toLowerCase())
            )
        }
        return (
            <div className="list">
                <SearchBar searchFilter={this.searchFilter}
                    drawerClickHandler={this.drawerToggleClickHandler}
                >
                </SearchBar>
                <SideDrawer show={this.state.sideDrawerOpen}
                    getData={this.getData}
                />
                <div className="data-list">
                    {items.map((item, i) => {
                        return (
                            <List key={i}
                                imgSrc={item.media[0]['media-metadata'][1].url}
                                abstract={item.abstract}
                                author={item.byline}
                                date={item.published_date}
                                url={item.url}
                            />
                        )
                    }
                    )
                    }
                </div>
            </div>

        );
    }
}
export default SearchAppBar;