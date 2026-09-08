import './App.css'

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>TaskBoard</h1>

        <nav>
          <a href="#">Tasks</a>
          <a href="#">Users</a>
          <a href="#">Units</a>
          <a href="#">Departments</a>
        </nav>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <h2>Tasks</h2>
            <p>Manage your team's tasks</p>
          </div>

          <button type="button" className="primary-button">
            + New Task
          </button>
        </header>

        <section className="content">
          <div className="task-table">
            <div className="task-row task-header">
              <span>Task</span>
              <span>Status</span>
              <span>Priority</span>
              <span>Assignee</span>
            </div>

            <div className="task-row">
              <span>Implement TaskBoard frontend</span>
              <span className="status status-in-progress">
                IN_PROGRESS
              </span>
              <span className="priority priority-high">
                HIGH
              </span>
              <span>Nayhout</span>
            </div>

            <div className="task-row">
              <span>Prepare SIT deployment</span>
              <span className="status status-testing">
                TESTING
              </span>
              <span className="priority priority-medium">
                MEDIUM
              </span>
              <span>Nayhout</span>
            </div>

            <div className="task-row">
              <span>Review requirements</span>
              <span className="status status-todo">
                TODO
              </span>
              <span className="priority priority-low">
                LOW
              </span>
              <span>Team</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App