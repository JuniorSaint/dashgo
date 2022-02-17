import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import ItemSideBar from './itemSideBar';

export default function SideBarNav() {
  return (
    <Stack spacing="48px" alignItems="flex-start">
      <ItemSideBar
        subTitle1="Dashboad"
        subTitle2="Usuário"
        title="AUTOMAÇÃO"
        icon1={RiGitMergeLine}
        icon2={RiInputMethodLine}
        href1={'/dashbord'}
        href2={'/users'}
      />
      <ItemSideBar
        subTitle1="Formulário"
        subTitle2="Automação"
        title="GERAL"
        icon1={RiContactsLine}
        icon2={RiDashboardLine}
        href1={'/forms'}
        href2={'/automation'}
      />
    </Stack>
  );
}
