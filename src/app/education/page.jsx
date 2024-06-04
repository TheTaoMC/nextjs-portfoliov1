import React from "react";
import Container from "../components/container/Container";
import { Timeline } from "antd";
function Education() {
  return (
    <>
      <Container>
        <div
          id="EDUCATION"
          className="text-center py-4 mt-20 text-2xl font-bold"
        >
          EDUCATION
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div>
          <Timeline
            mode={"left"}
            items={[
              {
                label: "2012 - 2014",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      High Voc. Cert. (Ratchaburi Technical College)
                    </div>
                    <p>- Business Computer</p>
                  </>
                ),
              },
              {
                label: "2014 - 2016",
                children: (
                  <>
                    <div className="font-bold text-lg">
                      BBA (Southeast Asia University)
                    </div>
                    <p>- Business Computer</p>
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

export default Education;
