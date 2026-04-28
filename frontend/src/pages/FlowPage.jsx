import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const coreFlows = [
  {
    title: '注册与登录流程',
    desc: '游客注册后完成账号校验，登录成功后根据角色进入前台或后台入口。',
  },
  {
    title: '社区发帖与审核流程',
    desc: '发帖提交后执行内容校验，命中规则进入待审核，管理员审核后公开。',
  },
  {
    title: '题库练习流程',
    desc: '用户选题库和模式后作答交卷，系统自动评分并写入练习记录。',
  },
  {
    title: '计划打卡流程',
    desc: '创建计划后按提醒打卡，系统实时更新完成度和连续打卡天数。',
  },
  {
    title: '岗位匹配与提醒流程',
    desc: '完善条件后执行岗位匹配，用户订阅考试日历并接收关键节点提醒。',
  },
  {
    title: '岗位投递跟踪流程',
    desc: '跳转外部平台投递后回填状态，形成完整求职进展链路。',
  },
  {
    title: '后台审核与维护流程',
    desc: '管理员处理审核列表、举报记录和基础数据维护，处理过程全量留痕。',
  },
]

const reminderCards = [
  { label: '公告节点提醒', detail: '距离报名开始前 7 天通知' },
  { label: '报名截止提醒', detail: '截止前 24 小时二次提醒' },
  { label: '笔试安排提醒', detail: '考试前 72 小时推送' },
  { label: '面试冲刺提醒', detail: '面试前 10 天启动冲刺计划' },
]

function FlowPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="shell">
        <section className="section">
          <div className="section-head">
            <p className="eyebrow">动态模型</p>
            <h2>关键业务流程可视化</h2>
            <p className="muted">从注册登录到审核维护，覆盖用户侧与管理侧核心链路。</p>
          </div>
          <div className="timeline">
            {coreFlows.map((step, index) => (
              <div className="timeline-item" key={step.title}>
                <div className="timeline-index">0{index + 1}</div>
                <div>
                  <div className="timeline-title">{step.title}</div>
                  <div className="muted">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="eyebrow">提醒订阅</p>
            <h2>考试与任务节点提醒</h2>
          </div>
          <div className="track-grid">
            {reminderCards.map((item) => (
              <article className="track-card" key={item.label}>
                <div className="track-head">
                  <h3>{item.label}</h3>
                  <span className="tag subtle">订阅</span>
                </div>
                <p className="muted">{item.detail}</p>
                <button className="btn outline small" type="button">加入提醒</button>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FlowPage

