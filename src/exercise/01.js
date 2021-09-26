// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const loadGlobe = () => import('../globe')
const Globe = React.lazy(loadGlobe)

function Checkbox({children, onChange, checked}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        style={{marginBottom: '1rem'}}
        onFocus={loadGlobe}
        onMouseEnter={loadGlobe}
      >
        <input type="checkbox" checked={checked} onChange={onChange} />
        {' show globe'}
      </label>
      {children}
    </div>
  )
}

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <Checkbox
      checked={showGlobe}
      onChange={e => setShowGlobe(e.target.checked)}
    >
      <React.Suspense fallback={<div>Loading...</div>}>
        <div style={{width: 400, height: 400}}>
          {showGlobe ? <Globe /> : null}
        </div>
      </React.Suspense>
    </Checkbox>
  )
}

export default App
