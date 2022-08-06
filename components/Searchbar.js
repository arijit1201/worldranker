import searchCss from '../styles/Searchbar.module.css'
const Searchbar = () => {
  return (
    <div className={searchCss.container}>
        <input placeholder="Search for country" />
        <button>Search</button>
    </div>
  )
}

export default Searchbar