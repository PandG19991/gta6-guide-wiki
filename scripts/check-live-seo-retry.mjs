import { execFileSync } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const maxAttempts = 3;

for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
  try {
    execFileSync(process.execPath, ["scripts/check-live-seo.mjs"], {
      env: process.env,
      stdio: "inherit"
    });
    process.exit(0);
  } catch (error) {
    if (attempt === maxAttempts) throw error;
    console.warn(`Live SEO check attempt ${attempt} failed; retrying in 10 seconds.`);
    await delay(10_000);
  }
}
