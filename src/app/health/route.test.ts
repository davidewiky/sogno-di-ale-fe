import { describe, expect, it } from "vitest";
import { GET } from "~/app/health/route";

describe("/health", () => {
  it("should return ok", async () => {
    expect.hasAssertions();
    const result = await GET();
    const body = (await result.json()) as { status: "ok" };

    expect(result.status).toBe(200);
    expect(body).toStrictEqual({ status: "ok" });
  });
});
