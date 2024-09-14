import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="p-0">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
