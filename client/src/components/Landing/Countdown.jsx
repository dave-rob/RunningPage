import React from 'react';
import '../../styles/Landing.css'
import { useState, useEffect } from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [timeLeft, setTimeLeft] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(timeLeft);
};

const getReturnValues = (timeLeft) => {
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const TimeBlock = ({ value, label }) => {
  return (
    <Box
      bg="gray.800"
      px={{ base: 2, md: 10, sm:6 }}
      py={{ base: 4, md: 6 }}
      borderRadius="xl"
      boxShadow="lg"
      minW={{ base: "60px", md: "120px", sm: "80px"}}
    >
      <Text
        fontSize={{ base: "1xl", md: "3xl", sm:"1xl" }}
        fontWeight="bold"
        lineHeight="1"
      >
        {value}
      </Text>
      <Text
        fontSize={{ base: "0.5rem", md: "sm", sm: "0.75rem"}}
        textTransform="uppercase"
        letterSpacing="wide"
        opacity={0.7}
      >
        {label}
      </Text>
    </Box>
  );
};

const CountdownTimer = ({ targetDate, marathon }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
       <Box
      bg="gray.900"
      color="white"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      height={"100%"}
    >
        <Heading
        fontSize={{ base: "1xl", md: "4xl", sm: "2xl" }}
        mb={{ base: 4, md: 10, sm:6 }}
        fontWeight="bold"
      >
        Countdown to the {marathon}
      </Heading>
         <h2>Its Race Day!</h2>
         </Box>
         )
  } else {
    return (
      <Box
      bg="gray.900"
      color="white"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      height={"100%"}
    >
      <Heading
        fontSize={{ base: "1xl", md: "4xl", sm: "2xl" }}
        mb={{ base: 4, md: 10, sm:6 }}
        fontWeight="bold"
      >
        Countdown to the {marathon}
      </Heading>

      <Flex
        justify="center"
        align="center"
        gap={{ base: 2, md: 6 }}
        mx={"auto"}
        // maxW={"3xl"}
      >
        <TimeBlock value={days} label="Days" />
        <TimeBlock value={hours} label="Hours" />
        <TimeBlock value={minutes} label="Minutes" />
        <TimeBlock value={seconds} label="Seconds" />
      </Flex>
    </Box>
    );
  }
};

export default CountdownTimer;