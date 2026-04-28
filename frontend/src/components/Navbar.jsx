import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { isAuthed, user, logout } = useAuth()

  return (
    <header className="nav">
      <Link className="logo" to="/">
        <span className="logo-mark">GP</span>
        <div>
          <div className="logo-title">毕业去向平台</div>
          <div className="logo-sub">升学 · 考公 · 就业</div>
        </div>
      </Link>
      <nav className="nav-links">
        <NavLink to="/community">社区</NavLink>
        <NavLink to="/practice">题库</NavLink>
        <NavLink to="/tracks">路径</NavLink>
        <NavLink to="/flow">流程</NavLink>
        <NavLink to="/start">上手</NavLink>
      </nav>
      <div className="nav-actions">
        {isAuthed ? (
          <>
            <Link className="btn ghost" to="/profile">{user?.name || '用户中心'}</Link>
            <button className="btn primary" type="button" onClick={logout}>退出</button>
          </>
        ) : (
          <>
            <Link className="btn ghost" to="/login">登录</Link>
            <Link className="btn primary" to="/register">注册</Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
