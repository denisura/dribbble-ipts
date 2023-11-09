import { Routes, Route } from '@ipts/core-router';

import AppLayout from './AppLayout';
import Home from './Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
