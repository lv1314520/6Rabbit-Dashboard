import React from "react";
import styles from "./style";
import { WithStyles, withStyles } from "@material-ui/core";

import AvatarBoard from "../../components/AvatarBoard";
import CreditsComponent from "./Credits";
import SettingsComponent from "./Settings";
import NotificationsComponent from "./Notifications";
import ProfileThreadListComponent from "../../components/ProfileThreadList";
import { TITLE_PREFIX } from "../../consts";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Head from "next/head";

interface Props extends WithStyles {}

class Profile extends React.PureComponent<Props> {
    state = {
        activeTab: 0
    };
    handleTabChange = (_e: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            activeTab: newValue
        });
    };
    render() {
        const { classes } = this.props;
        const { activeTab } = this.state;
        return (
            <>
                <Head>
                    <title>{TITLE_PREFIX}用户</title>
                </Head>
                <AvatarBoard src={"/static/avatar.png"} username="hzytql" />
                <Paper className={classes["user-infos-container"]}>
                    <Tabs
                        value={activeTab}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="积分" />
                        <Tab label="帖子" />
                        <Tab label="通知" />
                        <Tab label="设置" />
                    </Tabs>
                    {activeTab === 0 && <CreditsComponent />}
                    {activeTab === 1 && <ProfileThreadListComponent prefix="我的" showPurchased={true} />}
                    {activeTab === 2 && <NotificationsComponent />}
                    {activeTab === 3 && <SettingsComponent />}
                </Paper>
            </>
        );
    }
}

export default withStyles(styles)(Profile);