import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  function goto() {
    console.log("clicked on goto");
    navigate("/create-category");
  }
  return (
    <div>
      <div className="mb-4">
        <SectionHeader text="Create Categories" />
      </div>
      <div className="mb-4">
        <Button
          text="Add Category"
          size="md"
          onClick={goto}
        />
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <div className="heading font-semibold text-[15px]">Task Status</div>
          <div className="text-normal text-[12px] text-[#A1A3AB]">
            <span className="text-[#F24E1E]">+</span> Add Task Status
          </div>
        </div>
        <table className="rounded-table text-center">
          <thead>
            <tr>
              <th>SN</th>
              <th>Task Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td>Completed </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>In Progress </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Not Started </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="font-semibold text-[15px]">Task Status</div>
          <div className="text-normal text-[12px] text-[#A1A3AB]">
            <span className="text-[#F24E1E]">+</span> Add Task Status
          </div>
        </div>
        <table className="rounded-table text-center">
          <thead>
            <tr>
              <th>SN</th>
              <th>Task Status </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td>Completed </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>In Progress </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Not Started </td>
              <td className="flex items-center justify-center gap-2">
                <Button
                  text="Delete"
                  icon="delete"
                />
                <Button
                  text="Edit"
                  icon="edit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
