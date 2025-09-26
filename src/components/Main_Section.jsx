import { use } from "react";
import calImg from "../assets/calendar.webp";
import ballImg from "../assets/images/ball.webp";
import Container from "./Container";
export default function Main_Section({ fetchPromise, onIncrement, tasks }) {
  const ticketsData = use(fetchPromise);
  return (
    <>
      <Container>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold my-4">Customer Tickets</h2>
          <h2 className="text-2xl font-bold my-4 md:mr-60 mr-0">Task Status</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start mb-20">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {ticketsData.map((perIssue) => {
              return (
                <div key={perIssue.id}>
                  <div
                    onClick={() => onIncrement(perIssue)}
                    className="shadow-md rounded-md cursor-pointer bg-[#FFFFFF] p-6 space-y-6"
                  >
                    <div>
                      <h2 className="font-semibold text-xl flex justify-between">
                        {perIssue.title}
                        {/* <div className="flex justify-center items-center gap-2.5"> */}
                        <button className="relative btn px-10 rounded-full text-lg bg-amber-100">
                          {perIssue.status}
                          <img
                            className="absolute left-3 h-5 w-5 rounded-full "
                            src={ballImg}
                            alt="ball"
                          />
                        </button>
                        {/* </div> */}
                      </h2>
                    </div>

                    <div className="flex justify-between my-2">
                      <h2 className="text-[#627382]">{perIssue.description}</h2>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-6">
                        <p className="text-[#627382]">{perIssue.ticketId}</p>
                        <p className="text-lg font-semibold">
                          {perIssue.priority}
                        </p>
                      </div>
                      <div className="flex gap-6">
                        <p className="text-[#627382]">{perIssue.customer}</p>
                        <div className="flex justify-center items-center gap-2.5">
                          <img className="h-5" src={calImg} alt="Calendar" />
                          <p className="text-[#627382]">{perIssue.createdAt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <aside className="rounded-md p-4 bg-[#FFFFFF]">
            <ul className="space-y-4">
              <div className="p-3.5 rounded-md shadow-sm bg-gray-100">
                <h3 className="font-semibold text-xl text-start mb-3">
                  Task Status
                </h3>
                <p className="text-[#627382]">
                  Select a ticket to add to task Status
                </p>
              </div>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="text-center p-3.5 rounded-md shadow-sm bg-[#FFFFFF]"
                >
                  <h3 className="font-semibold text-xl text-start mb-3.5">
                    {task.title}
                  </h3>
                  <button className="btn bg-[#02A53B] text-white w-full text-lg py-5.5">
                    Complete
                  </button>
                </li>
              ))}
            </ul>
            <ul className="mt-16">
              <li>
                <div className="p-3.5 rounded-md shadow-md bg-gray-100">
                  <h3 className="font-semibold text-xl text-start mb-3">
                    Resolved Task
                  </h3>
                  <p className="text-[#627382]">No resolved tasks yet</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}
