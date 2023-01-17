import './index.css'

//https://stackoverflow.com/questions/41768215/english-json-dictionary-with-word-word-type-and-definition
// The dictionary is arranged in this format- {WORD: {'MEANINGS':{} , 'ANTONYMS':[...] , 'SYNONYMS':[...]}}

// and the 'MEANINGS' dict is arranged as 'MEANINGS':{sense_num_1:[TYPE_1, MEANING_1, CONTEXT_1, EXAMPLES], sense_num_2:[TYPE_2, MEANING_2, CONTEXT_2, EXAMPLES] and so on...}


const TabItem = props => {
  const {tabDetails} = props
  // const {id, timeAccessed, logoUrl, title, domainUrl} = tabDetails
  const {title, definition} = tabDetails

  return (
    <div className="tab-item">
      {/* <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <div>
        <p>{domainUrl}</p>
      </div> */}
      <h1>{title}</h1>
      <p>{definition}</p>
    </div>
  )
}

export default TabItem
