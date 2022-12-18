import React from "react";
import {Box,Text,Image,Flex,Card,CardBody} from "@chakra-ui/react"

export default function EnjoyLife(){
    return(
        <Box textAlign={"left"} padding={"20px"}>
          <Text as="b" fontSize="xl" >Enjoy Life</Text>
          <Flex marginTop={"20px"} height={"450px"}>
            <Box><Image h={"100%"} src={'https://img.gkbcdn.com/bn/2212/1-639692292b40c948ec525e8d._p1_.jpg'}/></Box>
            <Box width={"60%"} margin={"auto"}>
                <Flex>
                <Flex direction={"column"} margin="auto">
                    <Text>Gift ideas for your special ones</Text>
                    <Flex>
                        <Card>
                            <CardBody>
                                <Image
                                src='https://img.gkbcdn.com/bn/2212/5-639696402b40c948ec525e98._p1_.jpg'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Text marginTop={"10px"} fontSize={"13px"}>Top Tech Gifts</Text>
                            </CardBody>
                        </Card>
                        <Card>
                                <CardBody>
                                    <Image
                                    src='https://img.gkbcdn.com/bn/2212/2-639697862b40c948ec525e99._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    />
                                    <Text marginTop={"10px"} fontSize={"13px"}>Get in 5 Days</Text>
                                </CardBody>
                        </Card>
                    </Flex>
                </Flex>
                <Flex direction={"column"}>
                <Text>Create a world of wonder</Text>
                    <Flex>
                        <Card>
                            <CardBody>
                                <Image
                                src='https://img.gkbcdn.com/bn/2212/3-639695772b40c948ec525e96._p1_.jpg'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Text marginTop={"10px"} fontSize={"13px"}>Christmas Trees</Text>
                            </CardBody>
                        </Card>
                        <Card>
                                <CardBody>
                                    <Image
                                    src='https://img.gkbcdn.com/bn/2212/4-639696002b40c948ec525e97._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    />
                                    <Text marginTop={"10px"} fontSize={"13px"}>Holiday Decors</Text>
                                </CardBody>
                        </Card>
                    </Flex>
                </Flex>
                </Flex>

                <Flex >
                <Flex direction={"column"}>
                    <Text>100+ stocking stuffer ideas</Text>
                    <Flex>
                        <Card>
                            <CardBody>
                                <Image
                                src='https://img.gkbcdn.com/bn/2212/6-63969a2d2b40c948ec2b7046._p1_.jpg'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Text marginTop={"10px"} fontSize={"13px"}>For Adults</Text>
                            </CardBody>
                        </Card>
                        <Card>
                                <CardBody>
                                    <Image
                                    src='https://img.gkbcdn.com/bn/2212/7-63969a472b40c948ec2b7047._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    />
                                    <Text marginTop={"10px"} fontSize={"13px"}>For Kids</Text>
                                </CardBody>
                        </Card>
                    </Flex>
                </Flex>
                <Flex direction={"column"}>
                <Text>Let's play together</Text>
                    <Flex>
                        <Card shadowColor={"white"}>
                            <CardBody>
                                <Image
                                src='https://img.gkbcdn.com/bn/2209/210x2105-633272852b40c9222cacb30a._p1_.jpg'
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                />
                                <Text marginTop={"10px"} fontSize={"13px"}>Game Consoles</Text>
                            </CardBody>
                        </Card>
                        <Card>
                                <CardBody>
                                    <Image
                                    src='https://img.gkbcdn.com/bn/2209/210x2104-633272352b40c9222cacb309._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    />
                                    <Text marginTop={"10px"} fontSize={"13px"}>Party Speakers</Text>
                                </CardBody>
                        </Card>
                    </Flex>
                </Flex>
                </Flex>
            </Box>
          </Flex>
        </Box>
    )
}