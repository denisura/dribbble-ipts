import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavigationItem } from '@ipts/shared-data-navigation-provider';

export interface SharedUiNavigationListProps {
  navItems: NavigationItem[];
  color: string;
}

export const SharedUiNavigationList = ({
  navItems,
  color,
}: SharedUiNavigationListProps) => {
  return (
    <List>
      {navItems.map(({ label, key, onClick }) => (
        <ListItem key={key} disablePadding>
          <ListItemButton
            disableTouchRipple={true}
            sx={{ textAlign: 'start', p: 0, minHeight: 32 }}
            onClick={onClick}
          >
            <ListItemText color={color}>{label}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SharedUiNavigationList;
