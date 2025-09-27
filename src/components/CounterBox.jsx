import bgImg from "../assets/images/vector1.png";
import Container from "./Container";
export default function CounterBox({ inProgress, resolved }) {
  return (
    <Container>
      <div className="md:grid grid-cols-2 space-y-5 md:space-y-0 gap-[20px] my-[50px]">
        <div className="relative rounded-md p-7 text-white h-[250px] flex flex-col items-center justify-center overflow-hidden bg-gray-600 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <div
            className="absolute inset-0 bg-left bg-no-repeat h-[250px] w-full"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>
          <div
            className="absolute inset-0 bg-no-repeat bg-end"
            style={{
              backgroundImage: `url(${bgImg})`,
              transform: "rotateY(180deg)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl">In-Progress</h2>
            <p className="font-semibold text-[38px]">{inProgress}</p>
          </div>
        </div>
        <div className="relative rounded-md p-7 text-white h-[250px] flex flex-col items-center justify-center overflow-hidden bg-gray-600 bg-gradient-to-r from-[#54CF68] to-[#00827A]">
          <div
            className="absolute inset-0 bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${bgImg})` }}
          ></div>

          <div
            className="absolute inset-0 bg-no-repeat bg-end"
            style={{
              backgroundImage: `url(${bgImg})`,
              transform: "rotateY(180deg)",
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl">Resolved</h2>
            <p className="font-semibold text-[38px]">{resolved}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
