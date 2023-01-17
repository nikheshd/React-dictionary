import {Component} from 'react'
import TabItem from '../TabItems'

import './index.css'
import json_data from './dictionary.json';
import json_data2 from './dict2.json';  
//https://stackoverflow.com/questions/41768215/english-json-dictionary-with-word-word-type-and-definition
// The dictionary is arranged in this format- {WORD: {'MEANINGS':{} , 'ANTONYMS':[...] , 'SYNONYMS':[...]}}

// and the 'MEANINGS' dict is arranged as 'MEANINGS':{sense_num_1:[TYPE_1, MEANING_1, CONTEXT_1, EXAMPLES], sense_num_2:[TYPE_2, MEANING_2, CONTEXT_2, EXAMPLES] and so on...}

var result = [];
for(var i in json_data2)
    result.push({
    title: i,
    definition: json_data[i]
  });

function compare(a, b) {
  return a.title<b.title?-1 : 1;
}

result.sort(compare);
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
          />
          <input
            type="search"
            className="search-input"
            value={searchInput}
            alt="search"
            onChange={this.onChangeSearchInput}
            onKeyDown={this.handleKeyDown}
          />
          <div>
            <p>Sorry, There is no such word in our database.</p>
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
        <input
          type="search"
          className="search-input"
          value={searchInput}
          alt="search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.handleKeyDown}
        />
        <div>
            {displayResults.map(each => (
              <TabItem
                tabDetails={each}
              />
            ))}
        </div>
      </div>
    )
  }
}
export default BrowserSearch
