import React from 'react'

class Education extends React.Component {
  render() {
    return (
      <div className="edu container mgb">
        <div className="title_box container-flex">
          <h2>學歷</h2>
          <span>EDUCATION</span>
        </div>
        <ul className="font-size">
          <li className="point line">
            國立中山大學 資訊管理所 碩士 | 2018.9-2020.7
          </li>
          <span>GPA:4.2</span> <a href="">成績單</a> <br />
          <span>商業大數據學程</span> <a href="">證書</a>
          <li className="point">
            國立中央大學 企業管理學系 學士 | 2014.9-2018.6
          </li>
          <span>ERP學程</span> <a href="">證書</a>
        </ul>
      </div>
    )
  }
}

export default Education
