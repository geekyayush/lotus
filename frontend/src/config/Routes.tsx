import React, { FC, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import ViewPlans from "../pages/ViewPlans";
import ViewCustomers from "../pages/ViewCustomers";
import SettingsPage from "../pages/settings/SettingsPage";
import StripeRedirect from "../integrations/StripeIntegrations";
import SideBar from "../components/SideBar";
import { Avatar, Col, Divider, Layout, PageHeader, Row } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CreatePlan from "../pages/CreatePlan";
import ViewMetrics from "../pages/ViewMetrics";
import EditPlan from "../pages/EditPlan";

const { Header, Sider, Content, Footer } = Layout;

const AppRoutes: FC = () => {
  const [collapse, setCollapse] = useState(false);

  const handleToggle = (event: any) => {
    event.preventDefault();
    collapse ? setCollapse(false) : setCollapse(true);
  };

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);
  return (
    <div className="bg-darkgold">
      <Layout>
        <Sider
          trigger={null}
          collapsible={false}
          collapsed={collapse}
          style={{ minHeight: "100vh", background: "#FFFFFF" }}
        >
          <SideBar />
        </Sider>

        <Layout style={{ background: "#FFFFFF" }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/plans" element={<ViewPlans />} />
            <Route path="create-plan" element={<CreatePlan />} />
            <Route path="update-plan" element={<EditPlan />} />
            <Route path="/plan">
              <Route path=":planId" element={<EditPlan />} />
            </Route>
            <Route path="/customers" element={<ViewCustomers />} />
            <Route path="/metrics" element={<ViewMetrics />} />
            <Route path="/customers-create" element={<CreatePlan />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/redirectstripe" element={<StripeRedirect />} />
          </Routes>
          <Footer style={{ textAlign: "center" }}>Lotus Tech Co. @2022</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppRoutes;