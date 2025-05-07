import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  function goto() {
    console.log("clicked on goto")
    navigate("/create-category");
  }
  return <div className="flex flex-col gap-4">
    <div>
      <SectionHeader text="Create Categories" />
    </div>
    <Button text="Add Category" size="md" onClick={goto} />
    <div>
      <div className="flex justify-between items-center">
        <div>Task Status</div>
        <div>+ add</div>
      </div>
      <table className="rounded-table text-center">
        <thead>
          <tr>
            <th >SN</th>
            <th>Task Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1 </td>
            <td>Completed </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>In Progress </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Not Started </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div className="flex justify-between items-center">
        <div>Task Status</div>
        <div>+ add </div>
      </div>
      <table className="rounded-table text-center">
        <thead>

          <tr>
            <th >SN</th>
            <th>Task Status </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1 </td>
            <td>Completed </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>In Progress </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Not Started </td>
            <td className="flex items-center justify-center gap-2">
              <Button text="Delete" icon="delete" />
              <Button text="Edit" icon="edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}

export default Categories;