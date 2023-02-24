import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  AccessibilityNewOutlined,
  AdminPanelSettingsOutlined,
  BloodtypeOutlined,
  DangerousOutlined,
  ErrorOutlineOutlined,
  LockOpenOutlined,
  MedicationLiquidOutlined,
  PeopleOutlineOutlined,
  ScienceOutlined,
  SecurityOutlined,
  SystemUpdateAltOutlined,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import {
  highRiskPatientData,
  mockDataTeam,
  mockTransactions,
  recentUpdates,
} from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "first name",
      headerName: "First Name",
      flex: 1,
      cellClassNAme: "fname-column--cell",
    },
    {
      field: "last name",
      headerName: "Last Name",
      flex: 1,
      cellClassNAme: "lname-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "height (cm)",
      headerName: "Height (cm)",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "weight (kg)",
      headerName: "Weight (kg)",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "risk",
      headerName: "HF Risk",
      flex: 1,
      renderCell: ({ row: { risk } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.redAccent[400]}
            borderRadius="4px"
          >
            <DangerousOutlined />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {risk}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddCircleOutlineOutlinedIcon sx={{ mr: "10px" }} />
            New Patient
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32"
            subtitle="Current Patients"
            progress="0.14"
            increase="+14%"
            icon={
              <PeopleOutlineOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12"
            subtitle="High Risk Patients"
            progress="0.21"
            increase="+21%"
            icon={
              <ErrorOutlineOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="24"
            subtitle="Current Experiments"
            progress="0.05"
            increase="+5%"
            icon={
              <ScienceOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="50"
            subtitle="Recent Updates"
            progress="0.10"
            increase="+10%"
            icon={
              <SystemUpdateAltOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW 2  */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid rows={highRiskPatientData} columns={columns} />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Patient Updates
            </Typography>
          </Box>
          {recentUpdates.map((transaction, i) => (
            <Box
              key={`${transaction.update_id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.update_id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {`${transaction.first_name} ${transaction.last_name}`}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.updated_field === "biomarkers" && (
                  <BloodtypeOutlined />
                )}
                {transaction.updated_field === "comorbidities" && (
                  <AccessibilityNewOutlined />
                )}
                {transaction.updated_field === "medications" && (
                  <MedicationLiquidOutlined />
                )}
                {transaction.updated_field}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
