import PocketBase from "pocketbase";
import { env } from "~/lib/env";

const pb = new PocketBase(env.VITE_POCKETBASE_URL);

export default pb;
