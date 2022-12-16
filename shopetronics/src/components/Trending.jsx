import {Text,Box,Flex,Card,CardBody,Image,Stack,Heading} from "@chakra-ui/react"

export default function Trending(){
    return(
        <Box textAlign={"left"}>
             <Text fontSize="lg" as="b" margin="25px">Trending Categories</Text>
             <Flex padding={"20px"} cursor={"pointer"}>
             <Card maxW='sm' w={"33%"}>
                    <CardBody>
                        <Image
                        src='https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg'
                        alt='Smart Home & Garden'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Smart Home & Garden</Heading>
                        <Text fontSize={"13px"}>
                            Smart Cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!
                        </Text>
                        </Stack>
                    </CardBody>
             </Card>
             <Card maxW='sm'w={"33%"}>
                    <CardBody>
                        <Image
                        src='https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg'
                        alt='E-transport'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>E-transport</Heading>
                        <Text fontSize={"13px"}>
                            New e-rides for less. Skip gas prices with electric bikes, scooters & beyond.
                        </Text>
                        </Stack>
                    </CardBody>
             </Card>
             <Card maxW='sm'w={"33%"}>
                    <CardBody>
                        <Image
                        src='https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg'
                        alt='3D Printers'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>3D Printers</Heading>
                        <Text fontSize={"13px"}>
                           3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing.
                        </Text>
                        </Stack>
                    </CardBody>
             </Card>
             </Flex>
        </Box>
    )
}