// components/Github.js
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="bg-black text-white py-10">
      <Row style={{ justifyContent: "center" }}>
        <h1 className="text-xl font-semibold mb-6">Days I <strong>Code</strong></h1>
        <GitHubCalendar
          username="jacobcabrera36718"
          blockSize={15}
          blockMargin={5}
          color="white"
          fontSize={16}
        />
      </Row>
    </div>
  );
}

export default Github;
