/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Home from "../screens/Home";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Scan from "../screens/Scan";
import Order from "../screens/Order";
import Gift from "../screens/Gift";
import Stores from "../screens/Stores";
import { HomeHeader } from "../components/HomeHeader";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import OrderSubcategories from "../screens/OrderSubcategories";
import OrderItem from "../screens/OrderItem";
import Cart from "../screens/Cart";
import { CartHeader } from "../components/CartHeader";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const { Navigator, Screen, Group } =
  createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Navigator>
      <Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerTitle: () => (
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Sign in to Rewards
            </Text>
          ),
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
          headerTitle: () => (
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Sign up
            </Text>
          ),
        }}
      />
      <Screen
        name="OrderItem"
        component={OrderItem}
        options={{
          title: "OrderItem",
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Review order",
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name="Modal" component={ModalScreen} />
      </Group>
    </Navigator>
  );
}

function OrderNavigator() {
  return (
    <Navigator>
      <Screen
        name="Root"
        component={Order}
        options={{ headerShown: false }}
      />
      <Screen
        name="OrderSubcategories"
        component={OrderSubcategories}
        options={{
          title: "Order Subcategories",
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#006241",
        tabBarStyle: {
          height: 85,
        },
        headerStatusBarHeight: 100,
        headerTitleAlign: "left",
        headerStyle: {
          height: 200,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 10,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Pressable
                style={{
                  backgroundColor: "#d4e9e2",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                <Ionicons name="ios-home-sharp" size={24} color="#006241" />
              </Pressable>
            ) : (
              <Ionicons name="ios-home-outline" size={24} color="#7C7C8A" />
            ),
          headerTitle: () => <HomeHeader />,
          // headerLeft: () => (
          //   <Text>
          //     It's a great day for coffee
          //   </Text>
          // ),
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Scan"
        component={Scan}
        options={{
          title: "Scan",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Pressable
                style={{
                  backgroundColor: "#d4e9e2",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                <Ionicons name="ios-qr-code" size={24} color="#006241" />
              </Pressable>
            ) : (
              <Ionicons name="ios-qr-code-outline" size={24} color="#7C7C8A" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderNavigator}
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Pressable
                style={{
                  backgroundColor: "#d4e9e2",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                <MaterialCommunityIcons name="cup" size={24} color="#006241" />
              </Pressable>
            ) : (
              <MaterialCommunityIcons
                name="cup-outline"
                size={24}
                color="#7C7C8A"
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="Gift"
        component={Gift}
        options={{
          title: "Gift",
          headerTitle: "Gift cards",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Pressable
                style={{
                  backgroundColor: "#d4e9e2",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                <MaterialCommunityIcons name="gift" size={24} color="#006241" />
              </Pressable>
            ) : (
              <MaterialCommunityIcons
                name="gift-outline"
                size={24}
                color="#7C7C8A"
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="Stores"
        component={Stores}
        options={{
          title: "Stores",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Pressable
                style={{
                  backgroundColor: "#d4e9e2",
                  paddingHorizontal: 15,
                  paddingVertical: 2,
                  borderRadius: 16,
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={24}
                  color="#006241"
                />
              </Pressable>
            ) : (
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color="#7C7C8A"
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
