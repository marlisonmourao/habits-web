import { Habits } from "./components/Habits";

import './styles/global.css';

export function App() {
  return (
    <div>
      <Habits completed={3} />
      <Habits completed={3}/>
      <Habits completed={4}/>
      <Habits completed={4}/>
      <Habits completed={4}/>
      <Habits completed={4}/>
    </div>
  )
}
