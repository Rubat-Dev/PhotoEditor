import {
  Button,
  Flex,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdFlip } from "react-icons/md";
import { CgEditFlipV } from "react-icons/cg";

const PhotoEditor = () => {
  const rotateBtn = [
    { icon: <FaArrowRotateLeft />, action: "rotateRight" },
    { icon: <FaArrowRotateRight />, action: "rotateLeft" },
    { icon: <MdFlip />, action: "rotateY" },
    { icon: <CgEditFlipV />, action: "rotateX" },
  ];
  const filterBtns = [
    { name: "brightness", bg: "twitter" },
    { name: "saturate", bg: "green" },
    { name: "contrast", bg: "purple" },
    { name: "grayscale", bg: "orange" },
  ];

  const initialFilters = {
    brightness: 0,
    saturate: 0,
    contrast: 0,
    grayscale: 0,
  };
  const [filterValues, setFilterValues] = useState(initialFilters);
  const [activeFilter, setActiveFilter] = useState(filterBtns[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imgUrl, setImgUrl] = useState(null);
  const initialRotate = { rotate: 0, rotateX: 0, rotateY: 0 };
  const [rotateVal, setRotateVal] = useState(initialRotate);
  let inpUrl = useRef();
  let inpFile = useRef();

  const handleImg = () => {
    if (inpUrl.current.value) {
      setImgUrl(inpUrl.current.value);
      onClose();
    }
    if (inpFile.current.files[0]) {
      let selectedFile = URL.createObjectURL(inpFile.current.files[0]);
      setImgUrl(selectedFile);
      onClose();
    }
    // console.log(inpFile.current.files[0])
  };

  const handleChange = (e) => {
    setFilterValues({ ...filterValues, [activeFilter.name]: e });
  };

  const filters = Object.entries(filterValues);
  let values = "";
  for (let loop of filters) {
    if (loop[0] == "grayscale") {
      values += `${loop[0]}(${loop[1]}%) `;
    } else {
      values += `${loop[0]}(${loop[1] + 100}%) `;
    }
  }

  let transfrom = `rotate(${rotateVal.rotate}deg) rotateX(${rotateVal.rotateX}deg) rotateY(${rotateVal.rotateY}deg)`;

  const rotateImg = (action) => {
    if (action == "rotateRight") {
      setRotateVal({
        ...rotateVal,
        rotate: rotateVal.rotate == 360 ? 0 : rotateVal.rotate + 90,
      });
    }
    if (action == "rotateLeft") {
      setRotateVal({
        ...rotateVal,
        rotate: rotateVal.rotate == -360 ? 0 : rotateVal.rotate - 90,
      });
    }
    if (action == "rotateY") {
      setRotateVal({
        ...rotateVal,
        rotateY: rotateVal.rotateY == 180 ? 0 : 180,
      });
    }
    if (action == "rotateX") {
      setRotateVal({
        ...rotateVal,
        rotateX: rotateVal.rotateX == -180 ? 0 : -180,
      });
    }
  };
  const fileSelector = (e) => {
    let selectedFile = URL.createObjectURL(e.target.files[0]);
    setImgUrl(selectedFile);
  };

  const reset = () => {
    setFilterValues(initialFilters);
    setRotateVal(initialRotate);
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <FormLabel>Enter url</FormLabel>
            <Input ref={inpUrl} border={"1px solid black"} mb={5} />
            <Input ref={inpFile} type="file" accept="image" />
          </ModalBody>
          <ModalFooter gap={2}>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={handleImg}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        justify={"center"}
        align={"center"}
        h={"85vh"}
        bg={"pink.100"}
        fontFamily={"cursive"}
      >
        <VStack w={"60vw"} bg={"white"} p={4} gap={4}>
          <HStack justify={"space-between"} w={"full"}>
            <Heading fontSize={"22"} fontFamily={"cursive"}>
              React Js ImageEditer
            </Heading>
            <Button colorScheme="blue" fontFamily={"cursive"} onClick={onOpen}>
              Choose Image
            </Button>
          </HStack>
          <HStack w={"100%"}>
            <VStack
              w={"40%"}
              align={"start"}
              border={"1px"}
              color={"gray.500"}
              borderColor={"blackAlpha.400"}
              rounded={"md"}
              p={2}
            >
              <Text fontSize={"22s"}>Filter</Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={2} w={"full"}>
                {filterBtns.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveFilter(item)}
                    colorScheme={item.bg}
                    variant={
                      activeFilter.name == item.name ? "solid" : "outline"
                    }
                  >
                    {item.name}
                  </Button>
                ))}
              </Grid>
              <HStack w={"full"} justify={"space-between"}>
                <Text>{activeFilter.name}</Text>
                <Text>{filterValues[activeFilter.name]}%</Text>
              </HStack>
              <Slider
                onChange={(e) => handleChange(e)}
                value={filterValues[activeFilter.name]}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>Rotate & Flip</Text>
              <HStack w={"full"}>
                {rotateBtn.map((item, index) => (
                  <Button
                    key={index}
                    flex={1}
                    onClick={() => rotateImg(item.action)}
                  >
                    {item.icon}
                  </Button>
                ))}
              </HStack>
            </VStack>

            <HStack w={"60%"} bg={"gray.200"} h={250} overflow={"hidden"}>
              <Image
                src={imgUrl}
                transform={transfrom}
                w={"full"}
                h={"full"}
                objectFit={"contain"}
                filter={values}
              />
            </HStack>
          </HStack>
          <HStack justify={"space-between"} w={"full"}>
            <Button colorScheme="red" fontFamily={"cursive"} onClick={reset}>
              Reset Filters
            </Button>
            <Button colorScheme="pink" fontFamily={"cursive"}>
              Save Images
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

export default PhotoEditor;
