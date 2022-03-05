// import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
// import dynamic from 'next/dynamic';

// import Header from '../components/header';
// import SideBar from '../components/SideBar';
// import { theme } from '../styles/theme';

// const Chart = dynamic(() => import('react-apexcharts'), {
//   ssr: false,
// });

// const options = {
//   Chart: {
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: false,
//     },
//     foreColor: theme.colors.gray[500],
//   },
//   grid: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   tooltip: {
//     enabled: false,
//   },
//   xaxis: {
//     type: 'datetime',
//     axisBorder: {
//       color: theme.colors.gray[600],
//     },
//     categories: [
//       '2021-03-18T00:00:00.000',
//       '2021-03-19T00:00:00.000',
//       '2021-03-20T00:00:00.000',
//       '2021-03-21T00:00:00.000',
//       '2021-03-22T00:00:00.000',
//       '2021-03-23T00:00:00.000',
//       '2021-03-24T00:00:00.000',
//     ],
//   },
//   fill: {
//     opacity: 0.3,
//     type: 'gradient',
//     gradient: {
//       shade: 'dark',
//       opacityFrom: 0.7,
//       opacityTo: 0.3,
//     },
//   },
// };

// const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }];

// export default function Dashbord() {
//   return (
//     <Flex flexDirection="column" height="100vh">
//       <Header />

//       <Flex width="100%" my="6" maxWidth="1480px" mx="auto" paddingTop="6px">
//         <SideBar />
//         <SimpleGrid
//           flex="1"
//           gap="16px"
//           minChildWidth="320px"
//           alignItems="flex-start"
//         >
//           <Box padding="8" backgroundColor="gray.800" borderRadius={8} pb="4">
//             <Text fontSize="lg" mb="4">
//               Inscritos da semana
//             </Text>
//             <Chart series={series} type="area" height={160} />
//           </Box>
//           <Box padding="8" backgroundColor="gray.800" borderRadius={8} pb="4">
//             <Text fontSize="lg" mb="4">
//               Taxa de abertura
//             </Text>
//             <Chart series={series} type="area" height={160} />
//           </Box>
//         </SimpleGrid>
//       </Flex>
//     </Flex>
//   );
// }

export default function Pages() {
  return (
    <>
      <div></div>
    </>
  );
}
