import { LocalTransactionType } from "./types/LocalTransactionType";
import { LocalActivityType } from "./types/LocalActivityType";

export const IsOpenActivity = (
  { name, frequency }: LocalActivityType,
  transactions: LocalTransactionType[]
) =>
  [...transactions]
    .filter((t) => name === t.name)
    .filter(({date}) => (date + frequency) > new Date().getTime()).length === 0;
