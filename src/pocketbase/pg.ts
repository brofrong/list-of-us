import PocketBase from "pocketbase";
import { env } from "~/lib/env";
import { TypedPocketBase } from "./pocketbase-types";

const pb = new PocketBase(env.VITE_POCKETBASE_URL) as TypedPocketBase;

export default pb;
