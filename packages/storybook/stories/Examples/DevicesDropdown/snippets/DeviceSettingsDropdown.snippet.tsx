import { FluentThemeProvider } from '@azure/communication-react';
import { Dropdown, IDropdownOption } from '@fluentui/react';
import { useTheme } from '@fluentui/react-theme-provider';
import React from 'react';

export interface DeviceSettingsProps {
  devices: string[];
  onChange: (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => void;
}

export const DeviceSettingDropdownExample = ({ devices, onChange }: DeviceSettingsProps): JSX.Element => {
  const theme = useTheme();

  return (
    <FluentThemeProvider fluentTheme={theme}>
      <Dropdown
        style={{ width: '15rem' }}
        placeholder="Select an option"
        onChange={onChange}
        options={devices.map((device) => {
          return {
            selected: false,
            key: device,
            text: device
          };
        })}
      />
    </FluentThemeProvider>
  );
};
