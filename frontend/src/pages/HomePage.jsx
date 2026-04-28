import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const communityFeatures = [
  '游客浏览公开内容，注册用户参与互动',
  '分类至少覆盖：考研 / 考公考编 / 就业 / 留学 / 经验分享 / 资料互助',
  '支持关键词、标签、发布时间、热度、有无附件筛选',
  '命中敏感词或被举报内容可进入待审核流程',
]

const practiceFeatures = [
  '题库按方向、科目、章节、题型、难度组织',
  '章节练习 / 随机练习 / 模拟练习三种模式',
  '支持题号导航、答案暂存、统一交卷',
  '自动生成正确率、错题清单与历史趋势',
]

const tracks = [
  {
    id: 'kaoyan',
    title: '考研党',
    tag: '院校数据 + 复习管理',
    points: ['分数线/报录比查询', '复习计划与打卡', '备考资料共享', '同频自习室', '校友灯塔 1v1 咨询'],
  },
  {
    id: 'kaogong',
    title: '考公考编党',
    tag: '岗位匹配 + 考试提醒',
    points: ['智能岗位匹配', '历年进面分数线', '考试日历提醒订阅', '模拟面试协作'],
  },
  {
    id: 'job',
    title: '就业党',
    tag: '校招信息 + 投递追踪',
    points: ['宣讲会与网申推送', '简历模板管理', '岗位推荐与外链投递', '投递状态维护'],
  },
  {
    id: 'liuxue',
    title: '留学用户',
    tag: '申请节点 + 资料沉淀',
    points: ['申请时间线管理', '语言与文书资料库', '经验分享与互助', '提醒订阅与复盘'],
  },
]

const roleCards = [
  {
    title: '游客',
    points: ['浏览公开内容', '查看分类与公告', '不可发帖评论/练习'],
  },
  {
    title: '注册用户',
    points: ['社区互动', '题库练习与打卡', '咨询预约与投递跟踪'],
  },
  {
    title: '管理员',
    points: ['内容审核', '题库与数据维护', '违规处理与审计留痕'],
  },
]

const flowSteps = [
  {
    title: '注册与建档',
    desc: '手机号/邮箱/学号注册，完善学校、专业、年级、目标方向。',
  },
  {
    title: '进入赛道',
    desc: '按目标方向加载社区、题库和专属功能入口。',
  },
  {
    title: '过程管理',
    desc: '计划打卡、题库训练、错题复盘与提醒订阅持续推进。',
  },
  {
    title: '结果追踪',
    desc: '记录练习结果、岗位投递状态和阶段里程碑。',
  },
]

const stats = [
  { label: '核心模块', value: '9+' },
  { label: '目标方向', value: '4' },
  { label: '角色类型', value: '3' },
  { label: '关键流程', value: '8' },
]

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main className="shell">
        <section className="hero" id="top">
          <div className="hero-content">
            <p className="eyebrow">毕业去向导航与交流平台</p>
            <h1>把“找信息、做决策、跑流程”放进同一套前端体验</h1>
            <p className="lead">
              依据最新 SRS 重构功能入口，覆盖社区交流、题库练习、赛道专属服务、提醒订阅与账号权限控制。
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/register">创建账号</Link>
              <Link className="btn outline" to="/community">浏览社区</Link>
            </div>
            <div className="hero-stats">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <div className="panel-title">今日流程面板</div>
              <div className="panel-list">
                <div className="panel-item">
                  <span className="pill">社区</span>
                  <div>
                    <div className="panel-main">查看待审核资料贴</div>
                    <div className="panel-sub">含附件帖子优先进入审核</div>
                  </div>
                </div>
                <div className="panel-item">
                  <span className="pill">题库</span>
                  <div>
                    <div className="panel-main">随机练习 20 题</div>
                    <div className="panel-sub">自动计算正确率并归档错题</div>
                  </div>
                </div>
                <div className="panel-item">
                  <span className="pill">提醒</span>
                  <div>
                    <div className="panel-main">考试日历节点提醒</div>
                    <div className="panel-sub">支持站内消息扩展</div>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <span>本周任务完成率</span>
                <strong>78%</strong>
              </div>
            </div>
            <div className="panel-card accent">
              <div className="panel-title">角色权限视图</div>
              {roleCards.map((role) => (
                <div className="room-row" key={role.title}>
                  <div>
                    <div className="room-title">{role.title}</div>
                    <div className="room-sub">{role.points[0]}</div>
                  </div>
                  <span className="tag subtle">{role.points.length} 项能力</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="community">
          <div className="section-head">
            <p className="eyebrow">通用功能一</p>
            <h2>社区功能：公开浏览 + 登录互动 + 后台审核</h2>
            <p className="muted">帖子字段、状态流转、可见范围和检索维度与 SRS 对齐。</p>
          </div>
          <div className="grid-two">
            <div className="feature-card">
              <div className="card-title">社区能力</div>
              <ul className="feature-list">
                {communityFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-row">
                <span className="tag">考研</span>
                <span className="tag">考公考编</span>
                <span className="tag">就业</span>
                <span className="tag">留学</span>
                <span className="tag">资料互助</span>
              </div>
            </div>
            <div className="feature-card highlight">
              <div className="card-title">帖子状态机</div>
              <div className="tag-row">
                <span className="tag subtle">草稿</span>
                <span className="tag subtle">待审核</span>
                <span className="tag subtle">已发布</span>
                <span className="tag subtle">驳回</span>
                <span className="tag subtle">已下架</span>
              </div>
              <p className="muted">评论支持发布/隐藏/删除，后台保留留痕和审计信息。</p>
              <Link className="btn outline" to="/community">进入社区</Link>
            </div>
          </div>
        </section>

        <section className="section" id="practice">
          <div className="section-head">
            <p className="eyebrow">通用功能二</p>
            <h2>题目练习：题库管理 + 多模式训练 + 反馈统计</h2>
            <p className="muted">支持练习过程暂存、交卷评分、错题沉淀和周期数据分析。</p>
          </div>
          <div className="grid-two">
            <div className="feature-card soft">
              <div className="card-title">练习能力</div>
              <ul className="feature-list">
                {practiceFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="feature-card metrics">
              <div className="card-title">统计输出</div>
              <div className="mini-grid">
                <div className="mini-card">
                  <div className="mini-value">日</div>
                  <div className="mini-label">练习次数</div>
                </div>
                <div className="mini-card">
                  <div className="mini-value">周</div>
                  <div className="mini-label">平均正确率</div>
                </div>
                <div className="mini-card">
                  <div className="mini-value">月</div>
                  <div className="mini-label">累计时长</div>
                </div>
              </div>
              <Link className="btn ghost" to="/practice">开始练习</Link>
            </div>
          </div>
        </section>

        <section className="section" id="tracks">
          <div className="section-head">
            <p className="eyebrow">方向专属</p>
            <h2>四类用户方向，一套统一交互框架</h2>
          </div>
          <div className="track-grid four">
            {tracks.map((track) => (
              <div className="track-card" key={track.id}>
                <div className="track-head">
                  <h3>{track.title}</h3>
                  <span className="tag subtle">{track.tag}</span>
                </div>
                <ul className="feature-list compact">
                  {track.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn outline small" to="/tracks">查看路径</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="section-head">
            <p className="eyebrow">关键流程</p>
            <h2>从注册到达成目标的动态模型</h2>
          </div>
          <div className="timeline">
            {flowSteps.map((step, index) => (
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

        <section className="section cta" id="cta">
          <div>
            <h2>开始搭建你的毕业去向作战面板</h2>
            <p className="muted">先完成注册建档，再进入赛道配置计划、练习与提醒。</p>
          </div>
          <div className="cta-actions">
            <Link className="btn primary" to="/register">立即注册</Link>
            <Link className="btn ghost" to="/start">查看上手流程</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage

