// import logo from './logo.svg';
import './App.css';
import LHL_ClassComp from './component/LHL_ClassComp';
import LHL_FuncDemo from './component/LHL_FuncDemo';

function App() {
  // khai báo biến đối tượng
  const users = {
    userName:"K22CNT3",
    passwword:"hoanglong",
    firstName:"Lê Hoàng",
    LastName:"Long"
  }
  function formatName(user){
    return <h2>Chào Chủ Nhân, {user.firstName} {user.LastName}</h2>
  }
  return (
    <div className="App">
      {/* Biểu thức jsx */}
      <div>
        <p>FullName: {users.firstName} {users.LastName}</p>
        {formatName(users)}
      </div>

      {/* Sử dụng function component */}
      <div>
        <LHL_FuncDemo/>
        {/* Sử Dụng Func_Comp có props */}
        <LHL_FuncDemo userName="LHL" fullName="Lê Hoàng Long" age="20"/>
      </div>
      {/* Sử Dụng class component */}
      <div>
        {/* không sử dụng props */}
        <LHL_ClassComp/>
        <LHL_ClassComp compony="Nhà Tư Bản Tài Cao" course="LLoyd Thánh Nhân"/>
      </div>
    </div>
  );
}

export default App;
