import Icon from "../components/Icon";
import StatusDotIcon from "../components/Icons/StatusDot";
import TodoItem from "../components/TodoItem";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Modal from "../components/Modal";
import { useState } from "react";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const percentage = 66;
  return <div className="dashboard">
    <div>
      <div className="text-[38px] font-medium">
        Welcome back, Sundar
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="list-container p-8 rounded-2xl flex flex-col gap-2 overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex itmes-center">
            <Icon name="pending" className="h-8 w-7" />
            <span className="text-[15px] text-[#FF6767] font-medium"> To-Do </span>
          </div>
          <div className="flex itmes-center gap-1 cursor-pointer">
            <Icon name="plus" />
            <span className="text-[15px] text-[#A1A3AB] font-medium" onClick={() => setIsModalOpen(true)}> Add Task </span>
          </div>
        </div>
        <div className="flex gap-3 text-[#12px] font-normal">
          <span>20 June</span>
          <span className="text-[#A1A3AB]">Today</span>
        </div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <div>
        <div className="list-container p-8 rounded-2xl flex flex-col gap-2">
          <div className="flex itmes-center gap-2 mb-2">
            <Icon name="taskStatus" className="h-6 w-5.5" />
            <span className="text-[15px] text-[#FF6767] font-medium"> Task Status </span>
          </div>
          <div className="grid grid-cols-3">
            <div className="mx-auto">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                counterClockwise={true}
                className="h-24 w-24 mb-2"
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `#05A301`,
                  textColor: '#000000',
                  trailColor: '#D9D9D9',
                  backgroundColor: '#FF6767',
                })} />
              <div className="flex items-center gap-2">
                <StatusDotIcon color="#05A301" />
                <span>Completed</span>
              </div>
            </div>
            <div className="mx-auto">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                counterClockwise={true}
                className="h-24 w-24 mb-2"
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `#0225FF`,
                  textColor: '#000000',
                  trailColor: '#D9D9D9',
                  backgroundColor: '#FF6767',
                })} />
              <div className="flex items-center gap-2">
                <StatusDotIcon color="#0225FF" />
                <span> In-progress</span>
              </div>
            </div>
            <div className=" mx-auto">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                counterClockwise={true}
                className="h-24 w-24 mb-2"
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  pathColor: `#F21E1E`,
                  textColor: '#000000',
                  trailColor: '#D9D9D9',
                  backgroundColor: '#FF6767',
                })} />
              <div className="flex items-center gap-2">
                <StatusDotIcon color="#F21E1E" />
                <span>Not Started</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list-container p-8 rounded-2xl flex flex-col gap-2 overflow-auto">
          <div className="flex itmes-center gap-2 mb-2">
            <Icon name="taskCompleted" className="h-6 w-5.5" />
            <span className="text-[15px] text-[#FF6767] font-medium">Completed Task</span>
          </div>
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="h-[calc(100vh-400px)]">
      <h2 className="text-xl font-semibold mb-4">This is a Modal</h2>
      <p className="text-gray-700 mb-4">Add task content will display here!</p>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Close
      </button>
    </Modal>
  </div>
}

export default Dashboard;