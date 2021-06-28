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
          <li>喜歡每經過一個新的網站，就點一下F12，看看別人怎麼寫網頁，</li>
          <li>專案完成的成就感是我前進的動力，</li>
          <li>學習新事物的充實感能帶給我滿足，</li>
          <li>期許自己未來不只能專精於開發User-Friendly的介面，</li>
          <li>更能對系統開發的各個流程有深入了解。</li>
        </ul>
      </div>
    )
  }
}
export default Profile
