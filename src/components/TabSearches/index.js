import {Component} from 'react'
import TabItem from '../TabItems'

import './index.css'
// import json_data from './dictionary.json';
import json_data2 from './dict2.json';  
//https://stackoverflow.com/questions/41768215/english-json-dictionary-with-word-word-type-and-definition
// The dictionary is arranged in this format- {WORD: {'MEANINGS':{} , 'ANTONYMS':[...] , 'SYNONYMS':[...]}}

// and the 'MEANINGS' dict is arranged as 'MEANINGS':{sense_num_1:[TYPE_1, MEANING_1, CONTEXT_1, EXAMPLES], sense_num_2:[TYPE_2, MEANING_2, CONTEXT_2, EXAMPLES] and so on...}

var result = [];
for(var i in json_data2)
    result.push({
    title: i,
    definition: json_data2[i]
  });

// function compare(a, b) {
//   return a.title<b.title?-1 : 1;
// }

// result.sort(compare);
const initialHistoryList = result;

class BrowserSearch extends Component {
  state = {
    searchInput: '',
    tabList: initialHistoryList,
    enter: false,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  };

  handleKeyDown = event => {
    var {enterpressed} = this.state
    if (event.key === 'Enter') {
      enterpressed = true;
    }else{
      enterpressed = false;
    }
    this.setState({enter: enterpressed});
  };

  render() {
    const {tabList} = this.state
    const {searchInput} = this.state
    const {enter} = this.state
    var searchResults
    if(enter){
      searchResults = tabList.filter(eachTab => 
        eachTab.title.toLowerCase() === searchInput.toLowerCase()
      )
    }else{
      searchResults = tabList.filter(each =>
        each.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
    }
    const displayResults = searchResults.slice(0, 10);
    if (searchResults.length === 0) {
      return (
        <div className='app-container'>
          <img
            className='image'
            src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/i/u/q/letters-flying-into-dictionary-pages.jpg?itok=yvC6zQqD"
            alt="app logo"
            placeholder='Type here...'
          />
          <div>
            <h1 className='title'>English Dictionary</h1>
          </div>
          <input
            type="search"
            className="search-input"
            value={searchInput}
            alt="search"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.handleKeyDown}
          />
          <div className='noresults'>
            <p>Sorry, There is no such word in our database.</p>
            <img 
              src="https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2017/11/diseno-web-404-CSS.gif?resize=600%2C323&quality=100&strip=all&ssl=1"
              alt="no results found"
            />
          </div>
        </div>
      )
    }
    return (
      <div className='app-container'>
        <img
          className='image'
          src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/Pictures/web/i/u/q/letters-flying-into-dictionary-pages.jpg?itok=yvC6zQqD"
          alt="app logo"
        />
        <div>
          <h1 className='title'>English Dictionary</h1>
        </div>
        <input
          type="search"
          className="search-input"
          value={searchInput}
          alt="search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.handleKeyDown}
          placeholder='Type here...'
        />
        <p className='resultcnt'>{searchResults.length} results found.</p>
        <div className='results'>  
            {displayResults.map(each => (
              <TabItem className='tabitem'
                tabDetails={each}
              />
            ))}
        </div>
        <div className='endmsg'>
          <img
            src="https://cdn.dribbble.com/users/2367833/screenshots/7816190/media/b1aaf5c98510012b56422d1619dc62e8.gif"
            alt="end of page"
            className='endimg'
          />
          <p>You reached the end. Atmost 10 results appear in lexicographical order. 
            Type the complete word and click enter for the exact word.
          </p>
        </div>
      </div>
    )
  }
}
export default BrowserSearch
