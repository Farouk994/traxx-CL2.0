// this is just to get the user
import { validateRoute } from "../../lib/auth";

export default validateRoute((req, res, user) => {
  res.json(user);
});
