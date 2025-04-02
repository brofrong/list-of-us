import { z } from "zod";

const envSchema = z.object({
  VITE_POCKETBASE_URL: z.string(),
});

let _env: z.infer<typeof envSchema>;
console.log(import.meta.env);

try {
  _env = envSchema.parse(import.meta.env);
} catch (e) {
  console.error("env error:", e);
}

export const env = _env!;
