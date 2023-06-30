import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material";

// interface for the props we are expecting
interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">B-Gold Hairs & Wigs 👱‍♀️</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
