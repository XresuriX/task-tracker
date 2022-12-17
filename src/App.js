import { useState } from 'react'
import "./styles.css";
import Header from './components/Header'
import Tasks from'./components/tasks'

    
 const App = () => {
   const [tasks, setTasks] = useState([{
     id:1,
     text: 'lorem',
     day: 'Feb 5th at 2pm',
     reminder: true,
   },
   {
     id:1,
     text: 'all will be well',
     day: 'Feb 5th at 2pm',
     reminder: true,
   }
   ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
export default App