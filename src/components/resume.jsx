import { Res } from "../global";

export default function Resume() {
  return (
    <Res
      className="resume"
      src="https://drive.google.com/file/d/1aHiUUch0MehgI9NizzVsevujBWznUN0R/preview"
      type="application/pdf"
      title="resumé"
      allow="autoplay"
      frameBorder="1"
      loading="lazy"
    ></Res>
  );
}
