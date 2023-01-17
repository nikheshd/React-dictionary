import './index.css'

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
