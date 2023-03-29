import {
  Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

const Faq = () => {
  const accordionItems = [
    {
      id: 1,
      title:
        "TLIS is revolutionizing battery technology from the ground up wit",
      content:
        "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
    },
    {
      id: 2,
      title:
        "TLIS is revolutionizing battery technology from the ground up wit",
      content:
        "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
    },
    {
      id: 3,
      title:
        "TLIS is revolutionizing battery technology from the ground up wit",
      content:
        "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
    },
    {
      id: 4,
      title:
        "TLIS is revolutionizing battery technology from the ground up wit",
      content:
        "TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and TLIS is revolutionizing battery technology from the ground up with the world’s first AMV Cube Cell, capable of charging from 0-100% in less than 15 minutes and",
    },
  ];

  return (
    <div className="container py-24 mx-auto ">
      <h2 className="text-center mb-12 text-5xl font-semibold">Frequently Asked Questions </h2>
      <Box className="px-10 flex flex-col  w-10/12 mx-auto">
        <Accordion allowToggle className="">
          {accordionItems.map(({ id, title, content }) => (
            <AccordionItem key={id}>
            <AccordionHeader>
              <Box flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb={4}>
              {content}
            </AccordionPanel>
          </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </div>
  );
};

export default Faq;
