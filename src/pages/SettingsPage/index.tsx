import { Card } from "../../components/Card";
import { ApplicationPageLayout } from "../../components/ApplicationPageLayout";
import { Subtitle } from "../../components/Subtitle";
import { Spacer } from "../../components/Spacer";
import { RadioGroup } from "../../components/RadioGroup";
import { Radio } from "../../components/Radio";
import { useThemeContext } from "../../hooks/context/useThemeContext";
import type { Theme } from "../../context/theme/types";

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export const SettingsPage = () => {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as Theme);
  };

  return (
    <ApplicationPageLayout pageTitle="Settings">
      <Card>
        <Subtitle>Theme</Subtitle>

        <Spacer />

        <RadioGroup
          name="theme"
          selectedValue={theme}
          onSelectedValueChange={handleThemeChange}
        >
          <span className="flex gap-4">
            {themes.map(({ label, value }) => (
              <label htmlFor={value} className="flex gap-1" key={value}>
                <Radio value={value} id={value} />

                {label}
              </label>
            ))}
          </span>
        </RadioGroup>
      </Card>
    </ApplicationPageLayout>
  );
};
