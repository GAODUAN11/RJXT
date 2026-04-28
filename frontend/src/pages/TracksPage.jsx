import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const trackCards = [
  {
    id: 'kaoyan',
    title: '考研党',
    desc: '以院校选择和复习管理为核心，支持数据查询、计划打卡、资料共享和咨询预约。',
    focus: ['历年分数线 / 报录比', '复习计划与打卡统计', '同频自习室', '校友灯塔 1v1 咨询'],
  },
  {
    id: 'kaogong',
    title: '考公考编党',
    desc: '围绕岗位筛选、分数参考、提醒订阅和模拟面试构建闭环。',
    focus: ['智能岗位匹配', '历年进面分数线', '考试日历提醒', '模拟面试记录'],
  },
  {
    id: 'job',
    title: '就业党',
    desc: '串联宣讲会信息、简历管理、岗位推荐与投递结果维护。',
    focus: ['校招宣讲会与网申推送', '简历模板管理', '岗位推荐与外链投递', '投递状态跟踪'],
  },
  {
    id: 'liuxue',
    title: '留学用户',
    desc: '聚焦申请节点管理、资料沉淀与经验协作，支持逐阶段复盘。',
    focus: ['申请时间线与节点提醒', '语言/文书资料库', '留学经验社区', '咨询预约与问答'],
  },
]

const commonModules = [
  '账户注册登录与权限控制',
  '社区发帖、评论、点赞、收藏、举报',
  '题库练习、错题本、历史统计',
  '提醒订阅、公告通知与进度管理',
]

function TracksPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="shell">
        <section className="section">
          <div className="section-head">
            <p className="eyebrow">人群路径</p>
            <h2>方向专属功能与通用模块组合</h2>
            <p className="muted">不同方向使用同一套交互骨架，保留专属业务入口和数据维度。</p>
          </div>
          <div className="grid-two">
            <div className="feature-card soft">
              <div className="card-title">所有方向共享能力</div>
              <ul className="feature-list">
                {commonModules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="feature-card metrics">
              <div className="card-title">角色差异说明</div>
              <ul className="feature-list compact">
                <li>游客：仅浏览公开内容</li>
                <li>注册用户：可使用完整业务流程</li>
                <li>管理员：负责审核、维护和违规处理</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="track-grid four">
            {trackCards.map((track) => (
              <article className="track-card" key={track.id}>
                <div className="track-head">
                  <h3>{track.title}</h3>
                  <span className="tag subtle">专属路径</span>
                </div>
                <p className="muted">{track.desc}</p>
                <ul className="feature-list compact">
                  {track.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="btn primary small" type="button">进入路径</button>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TracksPage

