import { Flex, useBreakpointValue } from '@chakra-ui/react';

import Logo from './Header/logo';
import NotificationNav from './Header/notificationNav';
import Profile from './Header/Profile';
import SidebarToggle from './SideBar/SidebarToggle';

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1480px"
      height="80px"
      mx="auto"
      marginTop="8px"
      alignItems="center"
      px="6"
    >
      <SidebarToggle />
      <Logo />
      <NotificationNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
