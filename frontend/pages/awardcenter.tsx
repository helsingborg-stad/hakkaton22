import Layout from "../components/Layout";
import Link from "next/link";
import { useContext } from "react";
import { PointsProgramContext } from "../services/pointsProgram/pointsProgram";

/* const awards = [
  {
    name: "ICA Maxi",
    points: 100,
  },
  {
    name: "Kulturkortet",
    points: 400,
  },
  {
    name: "Busskort",
    points: 400,
  }
]; */

function Awardcenter() {
  const { rewards } = useContext(PointsProgramContext);

  return (
    <Layout>
      <div className="m-4 rounded-xl bg-white shadow-md">
        <div className="border-b-4 border-green p-3">
          <h2 className="text-md font-semibold text-neutral-800">
            Belöningscenter
          </h2>
        </div>

        <div>
          {rewards.map((award) => (
            <Link href={`/award/${award.name}`} key={award.name}>
              <div
                className="border-b-2 border-neutral-200 p-4 flex justify-between text-neutral-800 bg-white
            "
              >
                <p className="text-xs font-semibold ">{award.name}</p>
                <p className="text-xs font-bold ">{award.points}p</p>
              </div>
            </Link>
          ))}

          <div className="p-4">
            <Link href="/">
              <span className="text-green font-bold">Tillbaka</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Awardcenter;
