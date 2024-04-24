import {Component} from 'react'
import CountriesList from '../CountriesList'
import VisitedItem from '../VisitedItem'

class CountryVisit extends Component {
  state = {
    initialCountriesList: [],
    visitedCountries: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    const vCountries = initialCountriesList.filter(
      each => each.isVisited !== false,
    )
    this.setState({initialCountriesList, visitedCountries: vCountries})
  }

  onClickVisit = id => {
    const {initialCountriesList} = this.state
    const visitedCountry = initialCountriesList.find(
      country => country.id === id,
    )
    const newIniList = initialCountriesList.map(country => {
      if (country.id === id) {
        return {
          ...country,
          isVisited: true,
        }
      }
      return country
    })

    this.setState(prevState => ({
      visitedCountries: [...prevState.visitedCountries, visitedCountry],
      initialCountriesList: newIniList,
    }))
  }

  onClickRemove = id => {
    const {initialCountriesList, visitedCountries} = this.state
    const removedFilterList = visitedCountries.filter(
      country => country.id !== id,
    )
    const newIniList = initialCountriesList.map(country => {
      if (country.id === id) {
        return {
          ...country,
          isVisited: false,
        }
      }
      return country
    })

    this.setState({
      visitedCountries: removedFilterList,
      initialCountriesList: newIniList,
    })
  }

  render() {
    const {visitedCountries, initialCountriesList} = this.state

    return (
      <div>
        <h1>Countries</h1>
        <ul>
          {initialCountriesList.map(country => (
            <CountriesList
              country={country}
              key={country.id}
              onClickVisit={this.onClickVisit}
            />
          ))}
        </ul>
        <h1>visited Countries</h1>
        {visitedCountries.length === 0 ? (
          <div>
            <p>No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul>
            {visitedCountries.map(country => (
              <VisitedItem
                country={country}
                key={country.id}
                onClickRemove={this.onClickRemove}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CountryVisit
