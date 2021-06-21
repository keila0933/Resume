import React from 'react'

class Experience extends React.Component {
  render() {
    return (
      <div className="experience container mgb">
        <div className="title_box container-flex">
          <h2>工作經驗</h2>
          <span>WORK EXPERIENCE</span>
        </div>
        <ul className="experienceItem font-size">
          <li>
            <h3>東和鋼鐵 ASP.NET MVC 程式設計實習 | 2020/8－2020/10 | 3個月</h3>
            <p>
              以原系統Data Schema與介面為基礎，主要用ASP.net MVC的架構 、Entity
              Framework、JQuery、Kendo UI、Telerik Report、MSSQL實作前
              後端分離之網頁系統，主要功能為讓供應商查詢、更改、新增、刪
              除、列印、確認訂購單。
            </p>
          </li>
          <li>
            <h3>中山大學資管所 | 研究{'/'}教學助理 | 2019/9－2020/7 </h3>
          </li>
        </ul>
      </div>
    )
  }
}

export default Experience
