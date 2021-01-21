import React, { PureComponent } from 'react';
import { GearPath } from './elements';

class Gear extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <GearPath d="M19.33 13.092C19.372 12.742 19.4 12.378 19.4 12C19.4 11.622 19.372 11.258 19.316 10.908L21.682 9.06002C21.892 8.89202 21.948 8.58402 21.822 8.34602L19.582 4.46802C19.442 4.21602 19.148 4.13202 18.896 4.21602L16.11 5.33602C15.522 4.88802 14.906 4.52402 14.22 4.24402L13.8 1.27602C13.758 0.996018 13.52 0.800018 13.24 0.800018H8.75996C8.47996 0.800018 8.25596 0.996018 8.21396 1.27602L7.79396 4.24402C7.10796 4.52402 6.47796 4.90202 5.90396 5.33602L3.11796 4.21602C2.86596 4.11802 2.57196 4.21602 2.43196 4.46802L0.191962 8.34602C0.0519616 8.59802 0.107962 8.89202 0.331962 9.06002L2.69796 10.908C2.64196 11.258 2.59996 11.636 2.59996 12C2.59996 12.364 2.62796 12.742 2.68396 13.092L0.317962 14.94C0.107961 15.108 0.0519616 15.416 0.177962 15.654L2.41796 19.532C2.55796 19.784 2.85196 19.868 3.10396 19.784L5.88996 18.664C6.47796 19.112 7.09396 19.476 7.77996 19.756L8.19996 22.724C8.25596 23.004 8.47996 23.2 8.75996 23.2H13.24C13.52 23.2 13.758 23.004 13.786 22.724L14.206 19.756C14.892 19.476 15.522 19.098 16.096 18.664L18.882 19.784C19.134 19.882 19.428 19.784 19.568 19.532L21.808 15.654C21.948 15.402 21.892 15.108 21.668 14.94L19.33 13.092ZM11 16.2C8.68996 16.2 6.79996 14.31 6.79996 12C6.79996 9.69002 8.68996 7.80002 11 7.80002C13.31 7.80002 15.2 9.69002 15.2 12C15.2 14.31 13.31 16.2 11 16.2Z" />
      </svg>
    );
  };
}

export default Gear;
