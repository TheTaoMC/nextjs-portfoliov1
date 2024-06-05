"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://api.thetaomc.xyz/api/contacts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContacts();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      sortDirections: ["ascend', 'descend', 'ascend"],
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://api.thetaomc.xyz/api/contacts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setContacts(contacts.filter((contact) => contact.id !== id));
      console.log("Delete successful");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Table columns={columns} dataSource={contacts} rowKey="id" />
    </>
  );
}

export default Dashboard;
