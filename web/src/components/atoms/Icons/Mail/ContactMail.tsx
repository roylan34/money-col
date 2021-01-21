import React, { PureComponent } from 'react';
import { Icon } from './elements';

class MobileMail extends PureComponent {
  render() {
    return (
      <Icon
        viewBox="0 0 30 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect
          x="0.000488281"
          width="30"
          height="23.1429"
          fill="url(#pattern-contact-mail)"
        />
        <defs>
          <pattern
            id="pattern-contact-mail"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image-contact-mail"
              transform="scale(0.0285714 0.037037)"
            />
          </pattern>
          <image
            id="image-contact-mail"
            width="35"
            height="27"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAbCAYAAAD28DaZAAAC20lEQVRIicXWe4hVVRTH8c/cuWFokpIwKkEJpeQDmSFfkUWIgoNPikJUTJHQAoO0BGXAcKJIrPzHQSSnCEVBfEWllVGWNJMPHHLEoIQiUkGMIPLxR9Mfe5/ccz3eGdG5/v46v3XWuft7z15r7VNVXde0GQ/hLDpUXvegH1YXsRuf3AGIVBvQVsSnqMIOPFthiAuY3jDjfAsUkhvPYU0FQVoxLAOBIubjo+hfx4/YKbytntL7WJyZtftqBqG+qrquqQOL0JwkD8NnGNIDIMvxTuIfxAmcy7Zpi1BEmX7C8Ah0u3QJU0pApuAk7sXRtGaW4XP0jf4y6vHubQBpwyP4Iom9jAPoE32xUPLQZJzC6CT2Cp6/BZDtqMWvSawZ75UmlsLA/cIepm3+Icbj3E2CNGCOa8O0Bt+7wZ/Lg8m0A42Jb8UIHOomyKyS5x9Du/CnclUOBlajRRjXcBFPYlOZZ84I0HuT2Eocxn3lFusKBvq7/sxaghdzcvcLhXqqJH5XN9bpEqZNmDl/Rd8rudeESfg3+nWYiqvR353kNmLFrcCcwbjEj8TveCuJfYUxQkG+lsRHxdwtSWw93iwHU10YNG1NTvxi/MG/o886rB8ex8PYFe+dFd5gpjn4Er2Flv5TKH44iIF4NGfN9rw3cwVjIxBhOra6NpxgLo4LrZqqEdtKYht0buWlOhf3/8qDmYhfEv8DBufk1eK00DmwR+i+PDUL0zzTLHzdFcwkHEn8txh6gwUI23YsQs0sk0f4gEtr8CnhXMqFmScUZKaPhfroSr2EjuuOvhNaP9NY/Bavr2YwL2FrkvQBpnVzgZtRUai/AdFfwoR4Pbog7PXG5IG3saAHQDL1xVGh2zTMOP8HnsbPBcxOElfh1R4EyfSAcMyIQLvwTFozC/FGBUAyjcI3CVBHBjNb52lZKT2xdl/NzsxUVdc1vaD8KVwJtaC+KHwS7ME/dwikIAzVEf8B0MSSlj9/0kwAAAAASUVORK5CYII="
          />
        </defs>
      </Icon>
    );
  }
}

export default MobileMail;
