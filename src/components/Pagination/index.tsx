import { HStack } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

export function Pagination() {
  return (
    <HStack
      flexDirection="row"
      spacing="24px"
      marginTop="32px"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>
      <HStack>
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </HStack>
  );
}
