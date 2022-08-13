import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import s from './Particle.module.css'


export class ParticlesContainer extends React.PureComponent<any> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: "links",
    };

    return <Particles className={s.particle} options={options} init={this.customInit} />;
  }
}