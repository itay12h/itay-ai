import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#c4653a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          color: "white",
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "-0.5px",
          fontFamily: "sans-serif",
        }}
      >
        I
      </div>
    ),
    { ...size }
  );
}
