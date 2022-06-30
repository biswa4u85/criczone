import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, Switch, Layout } from 'antd';
import { useTheme } from "../../theme/use-theme";
const { Header } = Layout;

function Headers() {
    return (
        <Header>
            Header ...
                {/* <Button type="primary" onClick={() => langChange()}>LANG {i18n.language}</Button>
                <Switch checked={darkMode} onChange={setDarkMode} />
                <Button onClick={() => { navigate(`'/'`) }}>Login Page</Button> */}
            </Header>
    );
}

export default Headers;