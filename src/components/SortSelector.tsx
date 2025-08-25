import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown />
          Order by: Relevance
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="1">Relevance</MenuItem>
            <MenuItem value="1">Date added</MenuItem>
            <MenuItem value="1">Name</MenuItem>
            <MenuItem value="1">Release date</MenuItem>
            <MenuItem value="1">Popularity</MenuItem>
            <MenuItem value="1">Average rating</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
