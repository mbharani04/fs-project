import { Link, Routes, Route } from "react-router-dom"
import FormHandling from "./pages/FormHandling"
import MapExample from "./pages/ArrayLooping"
import FetchTable from "./pages/FetchApi"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">React useEffect Hooks Demo</h1>
            <p className="text-sm text-slate-400">Tailwind CSS + React Router</p>
          </div>
          <nav className="flex flex-wrap gap-2">
            <Link className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-600" to="/">
              Form Handling
            </Link>
            <Link className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-600" to="/arraylooping">
              Array Looping
            </Link>
            <Link className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-600" to="/fetchapi">
              Fetch API
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
          <Routes>
            <Route path="/" element={<FormHandling />} />
            <Route path="/arraylooping" element={<MapExample />} />
            <Route path="/fetchapi" element={<FetchTable />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
