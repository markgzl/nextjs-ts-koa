import React from 'react'


export default class NewsDetailPage extends React.Component {
  static async getInitialProps ({query}){
   
    return {id: query.id}
  }
  constructor(props){
    super(props)
  }

  add = () => {
    this.setState({
      ni: 'nihao '
    })
  }
  render(){
    console.log(this.props)
    return (
      <div className="container">
				NewsDetailPage
      </div>
    )
  }
}