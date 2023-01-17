import './index.css'

//https://stackoverflow.com/questions/41768215/english-json-dictionary-with-word-word-type-and-definition
// The dictionary is arranged in this format- {WORD: {'MEANINGS':{} , 'ANTONYMS':[...] , 'SYNONYMS':[...]}}
// and the 'MEANINGS' dict is arranged as 'MEANINGS':{sense_num_1:[TYPE_1, MEANING_1, CONTEXT_1, EXAMPLES], sense_num_2:[TYPE_2, MEANING_2, CONTEXT_2, EXAMPLES] and so on...}

const TypeEl = props => {
  const {type} = props
  if(type==='') return (null);
  return(
    <p>Type: <span>{type}</span></p>
  )
}

const MeaningEl = props => {
  const {meaning} = props
  if(meaning==='')  return (null);
  return(
    <p>Meaning: <span>{meaning}</span></p>
  )
}

const ContextEl = props=>{
  const {context} = props
  if(context.length===0)  return (null);
  if(context.length===1 && context[0]==='' )  return (null);
  return (
    <p>Context: 
      {' '+context.join(', ')}
    </p>
  )
}

const ExamplesEl = props => {
  const {examples} = props
  if(examples.length===0) return (null);
  return (
    <div>
      <p>Examples: </p>
        <ul>
          {examples.map(e => (
            <li>{e}</li>
          ))}
        </ul>
    </div>
  )
}

const DefinitionEl = props => {
  const {details} = props
  if(details.length===0){
    return (null);
  }
  return(
    <div>
      <p>Definitions: </p>
      <ol>
        {details.map(each => (
            <li>
              <TypeEl type = {each.type}/>
              <MeaningEl meaning = {each.meaning}/>
              <ContextEl context = {each.context}/>
              <ExamplesEl examples = {each.examples}/>
            </li>
          ))}
      </ol>
    </div>
  )
}

const AntonymsEl = props=>{
  const {details} = props
  if(details.length===0)  return (null);
  else if(details.length===1 && details[0]==='')  return (null);
  return (
    <p>Antonyms: 
      {' '+details.join(', ')}
    </p>
  )
}

const SynonymsEl = props=>{
  const {details} = props
  if(details.length===0)  return (null);
  else if(details.length===1 && details[0]==='')  return (null);
  return (
    <p>Synonyms: 
      {' '+details.join(', ')}
    </p>
  )
}

const TabItem = props => {
  const {tabDetails} = props
  const {title, definition} = tabDetails

  const means1 = definition['MEANINGS']
  var meaningsArr = []
  for(var i in means1){
    var obj = {
      type: means1[i][0],
      meaning: means1[i][1],
      context: means1[i][2],
      examples: means1[i][3]
    };
    meaningsArr.push(obj);
  }

  var ant = definition['ANTONYMS']
  var syn = definition['SYNONYMS']

  return(
    <div className="tab-item">
      <h1>{title}</h1>
      <DefinitionEl details={meaningsArr}/>
      <AntonymsEl details={ant}/>
      <SynonymsEl details={syn}/>
    </div>
  )
}

export default TabItem
