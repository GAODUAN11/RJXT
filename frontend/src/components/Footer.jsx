import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div>毕业去向导航与交流平台 © 2026</div>
      <div className="footer-links">
        <Link to="/community">社区</Link>
        <Link to="/practice">题库</Link>
        <Link to="/tracks">路径</Link>
        <Link to="/flow">流程</Link>
        <Link to="/start">上手</Link>
      </div>
    </footer>
  )
}

export default Footer
