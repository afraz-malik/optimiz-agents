// import { render } from '@testing-library/react'
import React from 'react'
import DataBoxCss from './DataBox.module.scss'
// Components
import DataList from '../DataList/DataList'

class DataBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      pageNumber: 1,
    }
  }
  totalPages = Math.ceil(this.props.data.length / 5)
  handlePage = (value) => {
    if (value === 'back') {
      if (this.state.pageNumber != 1) {
        this.setState({ ...this.state, pageNumber: this.state.pageNumber - 1 })
      }
      return
    }
    if (value === 'forward') {
      if (this.state.pageNumber < this.totalPages) {
        this.setState({ ...this.state, pageNumber: this.state.pageNumber + 1 })
      }
      return
    }
    this.setState({ ...this.state, pageNumber: value })
  }
  // const [pageNumber, setPageNumber] = useState(0)

  handleChange = (event) => {
    this.setState({ ...this.state, searchValue: event.target.value })
  }
  paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size)
  }

  render() {
    const { data, title } = this.props
    const { searchValue, pageNumber } = this.state
    const currentPageData = this.paginate(data, 5, pageNumber)
    const filteredData = currentPageData.filter((data) => {
      return (
        data.fname.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.lname.toLowerCase().includes(searchValue.toLowerCase()) ||
        // data.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.email.toLowerCase().includes(searchValue.toLowerCase())
      )
    })

    return (
      <div className={DataBoxCss.database}>
        <div className={DataBoxCss.top}>
          <div className={DataBoxCss.text}>
            <h3>List of {title}s</h3>
          </div>
          <div className={DataBoxCss.gear}>
            <img alt="" src="images/gear.svg" />
          </div>
        </div>
        <div className={DataBoxCss.action}>
          <div className={DataBoxCss.search}>
            <img alt="" src="images/search2.svg" />
            <input
              type="text"
              placeholder="Search for usernames, company..."
              onChange={this.handleChange}
              value={searchValue}
            />
          </div>
          <div className={DataBoxCss.filter}>
            <img alt="" src="images/filter.svg" />
            <h5>Filter</h5>
          </div>
          <div className={DataBoxCss.export}>
            <img alt="" src="images/export.svg" />
            <h5>Export</h5>
          </div>
        </div>
        <DataList title={title} data={filteredData} />
        <div className={DataBoxCss.pages}>
          <div
            className={DataBoxCss.back}
            onClick={() => this.handlePage('back')}
          >
            &lt;
          </div>
          {[...Array(this.totalPages)].map((i, j) => (
            <NumberGen
              key={j}
              counter={j + 1}
              handlePage={this.handlePage}
              pageNumber={pageNumber}
            />
          ))}
          <div
            className={DataBoxCss.front}
            onClick={() => this.handlePage('forward')}
          >
            &gt;
          </div>
        </div>
      </div>
    )
  }
}
class NumberGen extends React.Component {
  render() {
    const { counter, handlePage, pageNumber } = this.props
    return (
      <div
        className={DataBoxCss.numbers}
        onClick={() => handlePage(counter)}
        style={
          counter === pageNumber
            ? { background: ' #e14eca', color: 'white' }
            : null
        }
      >
        {counter}
      </div>
    )
  }
}
export default DataBox
