import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getBooking,   getToursCounts, getAllUsers } from "../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Container } from "reactstrap";

// import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [booking,setBooking] = useState(0)
  const [tourCount, setTourCount]= useState(0)
const [user, setUser] =useState(0)
;
  const [revenue, setRevenue] = useState(3);

  useEffect(() => {
    getBooking().then((res) => {
      setBooking(res.results)
      setRevenue(754)
    })

    getToursCounts().then((res) => {
      setTourCount(res.data)
    })

    getAllUsers().then((res) => {
      setUser(res.length)
    })

  }, []);

  return (
    <Container>
      <Space size={20} direction="vertical">
      <Typography.Title level={4}> Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Booking"}
          value={booking}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Tours"}
          value={tourCount}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Users"}
          value={user}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders />
        {/* <DashboardChart /> */}
      </Space>
    </Space>
    </Container>

  
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
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
    <>
      <Typography.Text>Recent Orders</Typography.Text>
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
            title:'Total Amount',
            dataIndex: 'totalAmount'
          },
          {
            title: "Contact No.",
            dataIndex: "phone",
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
    </>
  );
}

// function DashboardChart() {
//   const [reveneuData, setReveneuData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     getRevenue().then((res) => {
//       const labels = res.carts.map((cart) => {
//         return `User-${cart.userId}`;
//       });
//       const data = res.carts.map((cart) => {
//         return cart.discountedTotal;
//       });

//       console.log(data)
//       console.log(labels)
//       const dataSource = {
//         labels,
//         datasets: [
//           {
//             label: "Revenue",
//             data: data,
//             backgroundColor: "rgba(255, 0, 0, 1)",
//           },
//         ],
//       };

//       setReveneuData(dataSource);
//     });
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: true,
//         text: "Order Revenue",
//       },
//     },
//   };

//   return (
//     <Card style={{ width: 800, height: 250 }}>
//       <Bar options={options} data={reveneuData} />
//     </Card>
//   );
// }
export default Dashboard;
