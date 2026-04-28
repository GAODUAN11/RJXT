import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const cards = [
  {
    title: '步骤 01：注册并完善资料',
    desc: '使用手机号/邮箱/学号注册，补充学校、专业、年级、目标方向与意向地区。',
  },
  {
    title: '步骤 02：选择方向赛道',
    desc: '根据考研、考公考编、就业、留学目标自动加载专属入口和推荐内容。',
  },
  {
    title: '步骤 03：建立计划与练习',
    desc: '创建学习计划并进入题库练习，系统自动记录答题结果和错题。',
  },
  {
    title: '步骤 04：订阅提醒与跟踪进展',
    desc: '配置考试节点提醒、咨询预约或投递状态，形成完整过程追踪。',
  },
]

const checklist = [
  '勾选用户协议与隐私政策',
  '设置强密码（8-20 位，字母+数字）',
  '绑定手机号或邮箱用于找回密码',
  '完成目标方向配置，提升推荐准确性',
]

function StartPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="shell">
        <section className="section">
          <div className="section-head">
            <p className="eyebrow">快速上手</p>
            <h2>四步完成你的业务初始化</h2>
            <p className="muted">从建档到执行，再到提醒订阅与结果跟踪，快速进入稳定节奏。</p>
          </div>
          <div className="track-grid">
            {cards.map((item) => (
              <article className="track-card" key={item.title}>
                <div className="track-head">
                  <h3>{item.title}</h3>
                  <span className="tag subtle">引导</span>
                </div>
                <p className="muted">{item.desc}</p>
                <button className="btn primary small" type="button">立即执行</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="grid-two">
            <div className="feature-card soft">
              <div className="card-title">注册前检查</div>
              <ul className="feature-list compact">
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="feature-card metrics">
              <div className="card-title">下一步建议</div>
              <ul className="feature-list compact">
                <li>先浏览社区热门帖子和资料分享</li>
                <li>创建第一份练习计划并完成首日打卡</li>
                <li>订阅关键考试日历，避免错过节点</li>
              </ul>
              <div className="cta-actions">
                <Link className="btn primary small" to="/register">去注册</Link>
                <Link className="btn ghost small" to="/community">先逛社区</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default StartPage

