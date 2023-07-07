import { Button, Space, Table, Typography,Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { getAllUsers,  } from "../API";
import { Container } from "reactstrap";
import { BASE_URL } from "../config";
const token = localStorage.getItem('token')

function Customers() {
  const [loading, setLoading] = useState(false);
  const [userInfo,setUser] = useState([])

  useEffect(() => {
    setLoading(true);
    getAllUsers().then((res) => {
      setUser(res.data)
      setLoading(false)
    })
  }, []);

  const handleDelete = (userId) => {
    fetch(`${BASE_URL}/users/${userId}`,{
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  }).then(() => console.log(`Deleting user with ID ${userId}`))
  };

  return (
    <Container>
      <Space size={20} direction="vertical">
      <Typography.Title level={4}>User Detail</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "User Full Name",
            dataIndex: "username",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Role",
            dataIndex: "role",
          },
          {
            title: "Actions",
            dataIndex: '_id',
            render: (_,dataIndex) => (
              <Space>
       
                <Popconfirm
                  title="Are you sure you want to delete this user?"

                  onConfirm={() => handleDelete(dataIndex._id)}
                  okText="Yes"
                  cancelText="No"
                >                  

                  <Button type="danger">Delete</Button>
                </Popconfirm>
              </Space>
            ),
          },
          
        ]}
        dataSource={userInfo}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </Container>
  );
}
export default Customers;
