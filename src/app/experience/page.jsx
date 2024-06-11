import React from "react";
import Container from "../components/container/Container";
import { Radio, Timeline } from "antd";
import HeaderTitle from "../components/headertitle/HeaderTitle";
function Experience() {
  return (
    <>
      <Container>
{/*         <div
          id="EXPERIENCE"
          className="text-center py-8 mt-20 text-4xl font-bold tracking-wider text-gray-700 uppercase"
        >
          Experience
        </div>
        <div className="py-2 mb-10">
          <hr className="border-gray-700 w-2/3 mx-auto" />
        </div> */}

        <HeaderTitle id={"EXPERIENCE"} title={"EXPERIENCE"} />
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
