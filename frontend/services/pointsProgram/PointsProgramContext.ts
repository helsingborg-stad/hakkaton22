import { createContext } from "react";
import { IPointsProgram } from "./IPointsProgram";
import { nullPointsProgram } from "./null/nullPointsProgram";

export const PointsProgramContext =
  createContext<IPointsProgram>(nullPointsProgram());
