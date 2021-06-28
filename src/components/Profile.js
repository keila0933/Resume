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
          <li>喜歡寫程式給自己帶來的成就感與學習給自己帶來的踏實感。</li>
          <li>在前端開發中找到熱忱與興趣所在，</li>
          <li>期許自己未來不只能專精於前端，</li>
          <li>更能對系統開發的各個流程有深入了解。</li>
        </ul>
      </div>
    )
  }
}
export default Profile
