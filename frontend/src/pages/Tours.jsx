import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllTours } from "../API";
import { Container } from "reactstrap";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllTours().then((res) => {
      setAllTours(res.data)
      // console.log(res)
      setLoading(false)
    })


  }, []);

  return (
    <Container>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          loading={loading}
          columns={[
            // {
            //   title: "Title",
            //   dataIndex: "thumbnail",
            //   render: (link) => {
            //     return <Avatar src={link} />;
            //   },
            // },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "City",
              dataIndex: "city",
            },
            {
              title: "Address",
              dataIndex: "address",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Price",
              dataIndex: "price",
            },
            // {
            //   title: "Rating",
            //   dataIndex: "rating",
            //   render: (rating) => {
            //     return <Rate value={rating} allowHalf disabled />;
            //   },
            // },
            {
              title: "Distance",
              dataIndex: "distance",
            },
            {
              title: "Description",
              dataIndex: "desc",
            },

            {
              title: "Max Group Size",
              dataIndex: "maxGroupSize",
            },

          ]}
          dataSource={allTours}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </Container>
  );
}
export default Inventory;
