import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, room: "Living Room", isOn: false },
  { id: 2, room: "Kitchen", isOn: false },
  { id: 3, room: "Bedroom", isOn: false },
  { id: 4, room: "Bathroom", isOn: false },
  { id: 5, room: "Garage", isOn: false },
  { id: 6, room: "Porch", isOn: false },
  { id: 7, room: "Garden", isOn: false },
  { id: 8, room: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        lightId === light.id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleToggleAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  function handleToggleAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const allLightsOn =
    lights.filter((light) => light.isOn === true).length === lights.length;

  const allLightsOff =
    lights.filter((light) => light.isOn === false).length === lights.length;

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        handleToggleAllOn={handleToggleAllOn}
        handleToggleAllOff={handleToggleAllOff}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </Layout>
  );
}
