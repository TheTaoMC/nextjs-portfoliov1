"use client";
import React from "react";
import Container from "../components/container/Container";
import { Button, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLine,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function ContactME() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = async (values) => {
    console.log(values.data);

    try {
      const response = await fetch("https://api.thetaomc.xyz/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values.data),
        mode: "cors",
      });

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container>
        <div
          id="CONTACT ME"
          className="text-center py-4 mt-20 text-2xl font-bold"
        >
          CONTACT ME
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="flex justify-center">
          <div className="">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 400,
                width: 400,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["data", "name"]}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name={["data", "email"]}
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item name={["data", "subject"]}>
                <Input placeholder="Subject" />
              </Form.Item>
              
              <Form.Item name={["data", "message"]}>
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 0,
                }}
              >
                <Button className="w-full" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-700">
              Manote Bunyoy
            </div>
            <div className="text-gray-500">Full-Stack Web Developer</div>
            <div className="text-2xl font-bold text-gray-700">Phone</div>
            <div className="text-gray-500">+66 892 567 247</div>
            <div className="text-2xl font-bold text-gray-700">Email</div>
            <div className="text-gray-500">
              <a href="mailto:m.bunyoy@gmail.com">m.bunyoy@gmail.com</a>
            </div>
            <div className="text-2xl font-bold text-gray-700">Website</div>
            <div className="text-gray-500">
              <a
                href="http://www.thetaomc.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.thetaomc.xyz
              </a>
            </div>
            <div>
              <div className=" w-full py-4 flex justify-start items-center gap-4">
                <div className="h-5 w-5 text-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="h-5 w-5 text-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="h-5 w-5 text-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="h-5 w-5 text-center">
                  <FontAwesomeIcon icon={faLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContactME;
