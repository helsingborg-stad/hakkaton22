import { IPointsProgram } from "./IPointsProgram";
import { PointsProgramContext } from "./PointsProgramContext";

interface Props {
  children?: React.ReactNode;
  pointsProgram: IPointsProgram;
}

export default function PointsProgramProvider({
  children,
  pointsProgram,
}: Props): JSX.Element {
  return (
    <PointsProgramContext.Provider value={{ ...pointsProgram }}>
      {children}
    </PointsProgramContext.Provider>
  );
}
