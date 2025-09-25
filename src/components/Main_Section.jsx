import { use } from "react";
export default function Main_Section({ fetchPromise }) {
  const ticketsData = use(fetchPromise);
  console.log(ticketsData);
  return (
    <>
      {ticketsData.map((perIssue) => {
        return (
          <div key={perIssue.id}>
            <h2>My issues</h2>
          </div>
        );
      })}
    </>
  );
}
