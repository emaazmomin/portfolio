import axios from "axios";
import { AppProperties } from "../AppProperties";

export const downloadResume = async () => {
  const loca = AppProperties.loca;
  try {
    const response = await axios.get(`${loca}/portfolio/download-resume`, {
      responseType: "blob",
      timeout: 8000,
    });

    const fileURL = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );

    const fileLink = document.createElement("a");
    fileLink.href = fileURL;
    fileLink.setAttribute("download", "emaz-resume.pdf");
    document.body.appendChild(fileLink);

    fileLink.click();
    fileLink.remove();
    window.dispatchEvent(new CustomEvent("resume-downloaded"));
    return true;
  } catch (error) {
    console.warn("API download error, falling back to static resume:", error.message);
    const fallbackLink = document.createElement("a");
    fallbackLink.href = `${process.env.PUBLIC_URL || ""}/emaz-resume.pdf`;
    fallbackLink.setAttribute("download", "emaz-resume.pdf");
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    fallbackLink.remove();
    return true;
  }
};
