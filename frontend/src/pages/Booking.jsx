import { useState,useEffect } from "react";
import { Space, Table, Typography } from "antd";
import { getBooking } from "../API";
import { Container } from "reactstrap";


      

function Orders() {
  const [booking,setBooking] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBooking().then(res => {
      setBooking(res.data.data)
      setLoading(false)
    })
    

  }, []);

  return (
    <Container>
      <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        columns={[
          {
            title: "TourName",
            dataIndex: "tourName",
          },
          {
            title: "UserName",
            dataIndex: "fullName",
          },
          {
            title: "UserEmail",
            dataIndex: "userEmail",
          },
          {
            title: "Guest Size",
            dataIndex: "guestSize",
          },
          {
            title: "Contact No.",
            dataIndex: "phone",
          },
          {
            title:'Total Amount',
            dataIndex: 'totalAmount'
          },
          {
            title: "Booked AT",
            dataIndex: "bookAt",
          },
        ]}
        loading={loading}
        dataSource={booking}
        pagination={false}
      ></Table>
    </Space>
    </Container>
  );
}


export default Orders;