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
          <span>GPA:4.21</span>{' '}
          <a
            href="https://drive.google.com/file/d/19NMHSuP1khqqaaMweyIRj7qtbW8bBVD1/view?usp=sharing"
            target="_blank"
          >
            成績單
          </a>{' '}
          <a
            href="https://drive.google.com/file/d/19SP8hF6u0_de86n_9YIQLrUITvBOvS39/view?usp=sharing"
            target="_blank"
          >
            裴陶裴
          </a>{' '}
          <br />
          <span>商業大數據學程</span>{' '}
          <a
            href="https://drive.google.com/file/d/18R8Z12YxUW27rU_K1sHE4E22yWXBddcT/view?usp=sharing"
            target="_blank"
          >
            證書
          </a>
          <li className="point">
            國立中央大學 企業管理學系 學士 | 2014.9-2018.6
          </li>
          <span>ERP學程</span>{' '}
          <a
            href="https://drive.google.com/file/d/19Cc0zPDDXrrcBA_3UCEjSlKO5ychOY4S/view?usp=sharing"
            target="_blank"
          >
            證書
          </a>
          <br />
          <span>多益</span>{' '}
          <a
            href="https://drive.google.com/file/d/18SDxtHotYMDZh94aqMhrJIz5hA9vVdcY/view?usp=sharing"
            target="_blank"
          >
            證書
          </a>
        </ul>
      </div>
    )
  }
}

export default Education
