import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  allLightsOn,
  allLightsOff,
  onToggleAllOn,
  onToggleAllOff,
}) {
  // const allLightsOn =
  //   lights.filter((light) => light.isOn === true).length === lights.length;

  return (
    <StyledQuickActions>
      <Button type="button" onClick={onToggleAllOff} disabled={allLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onToggleAllOn} disabled={allLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
