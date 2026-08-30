import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE.metaTitle;

/** Generated at build time, so there's no static asset to keep in sync. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0F",
          padding: "72px",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            fontWeight: 700,
          }}
        >
          <span>GROWTH</span>
          <span style={{ color: "#FF6B2C" }}>FORGE</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            <span>Everything your brand</span>
            <span>needs to grow.</span>
            <span style={{ color: "#FF6B2C" }}>Under one roof.</span>
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 27, color: "#A1A1AA" }}>
            Brand · Design · Video · Social · Ads · Web · CRM · Automation · AI
          </div>
        </div>

        <div style={{ display: "flex", height: 10, background: "#FF6B2C" }} />
      </div>
    ),
    size,
  );
}
