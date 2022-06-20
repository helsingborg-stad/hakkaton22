import { IPointsProgram } from "./IPointsProgram";
import { PointsProgramContext } from "./PointsProgramContext";

interface Props {
  children?: React.ReactNode;
  provider: IPointsProgram;
}

export default function PointsProgramProvider({
  children,
  provider,
}: Props): JSX.Element {
  return (
    <PointsProgramContext.Provider value={{ ...provider }}>
      {children}
    </PointsProgramContext.Provider>
  );
}
