import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
const client = new QueryClient();
export default function Layout() { return <QueryClientProvider client={client}><StatusBar style="dark"/><Stack screenOptions={{headerShown:false,contentStyle:{backgroundColor:'#fff'}}}><Stack.Screen name="(tabs)"/><Stack.Screen name="product/[id]"/><Stack.Screen name="cart"/><Stack.Screen name="login"/><Stack.Screen name="account"/></Stack></QueryClientProvider>; }
