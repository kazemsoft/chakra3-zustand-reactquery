import { Card, Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <Container maxW="sm" h="full" px={0} py={[0, 8, 8]}>
      <Card.Root h="full" borderWidth={[0, 0, "thin"]}>
        <Card.Body p={0}>
          <Outlet />
        </Card.Body>
      </Card.Root>
    </Container>
  );
}
