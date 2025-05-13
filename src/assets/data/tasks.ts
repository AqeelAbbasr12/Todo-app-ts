interface Task {
  title: string;
  description: string;
  priority: "Extreme" | "Modrate" | "Low";
  status: "Completed" | "Not Started" | "In Progress";
  createdOn: string;
  updatedOn: string;
  imagePath: string;
}

const tasks: Task[] = [
  {
    title: "Task one",
    description: "Here is some description of the task one",
    priority: "Extreme",
    status: "Completed",
    createdOn: new Date().toString(),
    updatedOn: new Date().toString(),
    imagePath: "src/assets/images/profile1.jpg",
  },
];

export default tasks;
