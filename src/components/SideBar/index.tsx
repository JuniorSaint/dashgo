import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import SideBarNav from './SidebarNav';

export default function SideBar() {
  const isDrawerSidebar = useBreakpointValue({
    base: false,
    lg: true,
  });
  if (isDrawerSidebar) {
    return (
      <Box as="aside" width="256px" marginRight="32px">
        <SideBarNav />
      </Box>
    );
  }
  return <></>;
}
