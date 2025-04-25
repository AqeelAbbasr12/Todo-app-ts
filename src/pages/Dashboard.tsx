import TodoItem from "../components/TodoItem";

function Dashboard() {
  return <div className="dashboard">


    <div className="grid grid-cols-2 gap-4">
      <div className="list-container p-8 rounded-2xl flex flex-col gap-2">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  </div>
}

export default Dashboard;