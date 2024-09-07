import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
  import Image from "next/image";
  import logo from '../../app/logo.png'
  
  const Navigation = () => {
    return (
      <NavigationMenu className = "p-2">
        <Image src = {logo} height = {50} alt = "logo" />
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className = {navigationMenuTriggerStyle()} href="/dashboard/users">Manage Users</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuLink className = {navigationMenuTriggerStyle()} href="/dashboard/reports">Manage Reports</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuLink className = {navigationMenuTriggerStyle()} href="/dashboard/alerts">Manage Alerts</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };
  
  export default Navigation;
  