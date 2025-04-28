// import Thumbnail from "../components/Thumbnail";
import TodoItem from "../components/TodoItem";
// import Profile2 from "@/assets/images/profile2.jpg"

function Dashboard() {
  return <div className="dashboard">

    <div>
      <div className="text-[38px] font-medium">
        Welcome back, Sundar
      </div>

      {/* <Thumbnail size="md" imgUrl={Profile2} /> */}
    </div>
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