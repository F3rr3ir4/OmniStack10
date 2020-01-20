/******************************************
 *  Author : Leandro Ferreira Netto
 *  Created On : Sun Jan 19 2020
 *  File : routes.js
 *******************************************/
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: {
                screen: Main,
                navigationOptions: {
                    title: "DevRadar"
                }
            },
            Profile: {
                screen: Profile,
                navigationOptions: {
                    title: "Perfil no GitHub"
                }
            }
        },
        {
            defaultNavigationOptions: {
                headerTintColor: "#fff",
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: "#7D40E0"
                }
            }
        }
    )
);

export default Routes;
