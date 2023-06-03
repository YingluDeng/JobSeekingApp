import { Stack } from 'expo-router';
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hidenAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        // <Stack initialRouteName="home">
        //   <Stack.Screen name="home" />
        // </Stack>
        <Stack onLayout={onLayoutRootView} />
    )
}

export default Layout;