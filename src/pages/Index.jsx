import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Container, Divider, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <HStack spacing={6} align="start">
            <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTA2OTEyOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="DeWitt Clinton" />
            <VStack align="start" spacing={2}>
              <Heading as="h1" size="2xl">
                DeWitt Clinton
              </Heading>
              <Text fontSize="xl" color="gray.500">
                Software Engineer & Tech Enthusiast
              </Text>
            </VStack>
          </HStack>

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text fontSize="lg">I'm a passionate software engineer with over 10 years of experience building web applications. I love exploring new technologies and solving complex problems.</Text>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Projects
            </Heading>
            <VStack align="start">
              <Link href="#" fontSize="lg">
                Project 1
              </Link>
              <Text>Description of project 1 goes here.</Text>
            </VStack>
            <VStack align="start">
              <Link href="#" fontSize="lg">
                Project 2
              </Link>
              <Text>Description of project 2 goes here.</Text>
            </VStack>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="xl">
              Contact
            </Heading>
            <HStack spacing={4}>
              <Link href="https://github.com/dewittclinton">
                <Icon as={FaGithub} boxSize={6} />
              </Link>
              <Link href="https://twitter.com/dewittclinton">
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="https://www.linkedin.com/in/dewittclinton/">
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Container>

      <Divider />

      <Box textAlign="center" py={4}>
        <Text>&copy; {new Date().getFullYear()} DeWitt Clinton. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
