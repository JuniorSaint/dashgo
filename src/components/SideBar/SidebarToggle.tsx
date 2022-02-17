import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import SideBarNav from './SidebarNav';

export default function SidebarToggle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <>
        <Button backgroundColor="gray.900" onClick={onOpen} marginRight="8px">
          <HamburgerIcon />
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent backgroundColor="gray.800">
            <DrawerCloseButton />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  return <></>;
}