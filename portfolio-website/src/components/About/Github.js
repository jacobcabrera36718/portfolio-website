import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-[#e4e2dd] py-12">
      <h1 className="text-xl font-semibold mb-6">
        Days I <strong className="text-[#e4e2dd]">Code</strong>
      </h1>
      <GitHubCalendar
        username="jacobcabrera36718"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
        colorScheme="dark"
      />
    </div>
  );
}

export default Github;
