import { useState } from 'react'
import './App.css'
import { Button, Box, Text, Heading, Image, Stack, Card, CardBody,Grid,GridItem } from '@chakra-ui/react';
import img3 from '/IMG_0614.png';
import img2 from '/IMG_0471.png';
import img1 from '/IMG_0161.png';

function App() {
  // inicial state would be false untill it is used 
  const [message, setMessage] = useState(false)

  const buttonHandlerClick = () => {
    // to set the state true after the button is clicked and show message
    setMessage(true);
  }
  // test
  return (
    <>
      <Box>
        <Heading>Happy Third Month (:</Heading>

        <Button
          bg="#F687B3"
          size="lg"
          onClick={buttonHandlerClick}>Click</Button>

        {message && (
          <Card maxW="md">
            <CardBody>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <Image src={img3} alt='Us' borderRadius="lg" />
              </GridItem>
              <GridItem>
                <Image src={img2} alt='Us'borderRadius="lg" />
                </GridItem>
                <GridItem>
                <Image src={img1} alt='Us' borderRadius="lg"/>
              </GridItem>
              </Grid>
              <Stack mt="4" spacing="5">
                <Text>90 days fulling each other with warmth and memories, Memories so vivid when I close my eyes
                  I hear each others laugh to our inner jokes. I smile at the thougth of the love language we have created, a language only we understand filled with unspoken word but endless warmth.
                  Te amo
                </Text>
              </Stack>
            </CardBody>
          </Card>


        )}

      </Box>
    </>
  )
}

export default App
