import React from 'react'

class Skill extends React.Component {
  render() {
    return (
      <div className="skills-bg">
        <div className="skills container mgb">
          <div className="skillsList container-flex">
            <div className="title_box container-flex">
              <h2>技能</h2>
              <span>SKILLS</span>
            </div>
            <div className="skills-box">
              <div className="skill">
                <div className="skill-title">Data Analysis</div>
                <ul className="skillsItem">
                  <li>R / Python</li>
                  <li>MSSQL / Oracle</li>
                  <li>SPSS / Excel</li>
                </ul>
              </div>
              <div className="skill">
                <div className="skill-title">Web Developement</div>
                <ul className="skillsItem">
                  <li>Html5 / CSS{' & '}SCSS</li>
                  <li>Javascript / jQuery </li>
                  <li>React{' & '}hooks</li>
                  <li>Webpack / Npm</li>
                  <li>ASP.net MVC</li>
                  <li>Entity Framework</li>
                </ul>
              </div>
              <div className="skill">
                <div className="skill-title"> Language{' & '}Others </div>
                <ul className="skillsItem">
                  <li>Chinese / English</li>
                  <li>Git</li>
                  <li>JAVA / C#</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skill
