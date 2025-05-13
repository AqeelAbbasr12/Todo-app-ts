import IconButton from '../components/IconButton';
import Thumbnail from '../components/Thumbnail';
import TodoItem from '../components/TodoItem';

import ProfileImg from '@/assets/images/profile3.jpg';
const container = {
  border: '1px solid rgba(161, 163, 171, 0.63)',
  boxShadow: '0px 4px 4px rgba(0,0, 0, 0.25)',
  borderRadius: '14px',
};

function MyTasks() {
  return (
    <div className="grid grid-cols-12 gap-2 h-full">
      <div
        className="col-span-12 md:col-span-6 lg:col-span-5 overflow-auto w-full gap-2 px-5 py-4 flex-1"
        style={container}
      >
        <h2 className="text-[16px] font-semibold mb-2">My Tasks</h2>
        <div className="flex flex-col gap-2">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  lg:col-span-7 w-full px-5 py-4 flex-1" style={container}>
        <div className="flex justify-start items-end gap-2 mb-5">
          <div>
            <Thumbnail size="lg" imgUrl={ProfileImg} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[16px] font-semibold">Submit Document</div>
            <div className="text-[12px]">
              Priority: <span className="text-[#F21E1E]">Extreme</span>
            </div>
            <div className="text-[12px]">
              Status: <span className="text-[#F21E1E]">Not Started</span>
            </div>
            <div className="text-[10px] font-normal text-[#A1A3AB]">Created on: 20/06/2023</div>
          </div>
        </div>
        <div className="text-[16px] text-[#747474]">
          <div>
            <span className="font-bold">Task Title:</span> Document Submission.
          </div>
          <div>
            <span className="font-bold">Objective:</span> To submit required documents for something important
          </div>
          <div>
            <span className="font-bold">Task Description:</span> Review the list of documents required for submission
            and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical
            copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and
            verify the accepted file formats. Upload the documents securely to the designated platform, double-check for
            accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper
            processing.
          </div>

          <div>
            <span className="font-bold">Additional Notes:</span>
            <ul>
              <li>Ensure that the documents are authentic and up-to-date.</li>
              <li>Maintain confidentiality and security of sensitive information during the submission process.</li>
              <li>If there are specific guidelines or deadlines for submission, adhere to them diligently.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold">Deadline for Submission:</span> End of Day
          </div>
          <div className="flex justify-end items-center gap-2 mt-2">
            <IconButton icon="delete" className="w-10" />
            <IconButton icon="edit" className="w-10" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MyTasks;
