import React from "react";
import Container from "../components/container/Container";
import { Radio, Timeline } from "antd";
function Experience() {
  return (
    <>
      <Container>
        <div
          id="about-me"
          className="text-center py-4 mt-20 text-2xl font-bold uppercase"
        >
          Experience
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div>
          <Timeline
            mode={"left"}
            items={[
              {
                label: "2016",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      THEO Engineering Co, Ltd.
                    </div>
                    <p>- Service</p>
                  </>
                ),
              },
              {
                label: "2018 - 2020",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      THEO Engineering Co, Ltd.
                    </div>
                    <p>- Software Tester</p>
                  </>
                ),
              },
              {
                label: "2021 - 2021",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      THEO Engineering Co, Ltd.
                    </div>
                    <p>- Design UI</p>
                  </>
                ),
              },
              {
                label: "2022 - 2024+",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      THEO Engineering Co, Ltd.
                    </div>
                    <p>- Project Coordinators</p>
                    <p>- Design UI</p>
                    <p>- Software Tester</p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Container>
    </>
  );
}

export default Experience;
