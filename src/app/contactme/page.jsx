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
  const [form] = Form.useForm();
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
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Container>
        <div
          id="CONTACT ME"
          className="text-center py-8 mt-20 text-4xl font-bold tracking-wider text-gray-700 uppercase"
        >
          CONTACT ME
        </div>
        <div className="py-2 mb-4">
          <hr className="border-gray-700 w-2/3 mx-auto" />
        </div>
        <div className="flex justify-center bg-gray-200 rounded-lg p-4">
          <div className="">
            <Form
              {...layout}
              form={form}
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
              <div className=" w-full py-4 flex justify-center items-center gap-4">
                <div className="h-5 w-5 text-center">
                  <a
                    href="https://www.facebook.com/TheTaoMC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div className="h-5 w-5 text-center">
                  <a
                    href="https://www.instagram.com/thetaomc.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
                <div className="h-5 w-5 text-center">
                  <a
                    href="https://line.me/ti/p/8WOTj8NNiW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLine} />
                  </a>
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
