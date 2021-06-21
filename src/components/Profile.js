import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile mgb container">
        <div className="title_box container-flex">
          <h2>個人資料</h2>
          <span>PROFILE</span>
        </div>

        <ul className="font-size">
          <li className="point">傅昶曄 Josh Fu</li>
          <li>1996-</li>
          <li>應屆畢業生／ 役畢 ／ 網頁開發 / 資料分析</li>
        </ul>

        <ul className="font-size">
          <li>嘗試過 Web Developer / Data analysis</li>
          <li>並在介面開發中找到熱忱與興趣所在，</li>
          <li>期望能提供 User-friendly 的介面給使用者做更好的決策與行為</li>
        </ul>
      </div>
    )
  }
}
export default Profile
