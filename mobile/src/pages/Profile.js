/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Sun Jan 19 2020
 *  File : Profile.js
 *******************************************/
import React from "react";
import { WebView } from "react-native-webview";

function Profile({ navigation }) {
    const github_username = navigation.getParam("github_username");

    return (
        <WebView
            style={{ flex: 1 }}
            source={{ uri: `https://github.com/${github_username}` }}
        />
    );
}

export default Profile;
