import List, { ListProps } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavigationItem } from '@ipts/shared-data-navigation-provider';

export interface SharedUiNavigationListProps extends ListProps {
  navItems: NavigationItem[];
  dense?: boolean;
  color: string;
}

export const SharedUiNavigationList = ({
  navItems,
  color,
  dense = true,
  ...props
}: SharedUiNavigationListProps) => {
  return (
    <List {...props}>
      {navItems.map(({ label, key, onClick }) => (
        <ListItem key={key} disablePadding>
          <ListItemButton
            disableTouchRipple={true}
            sx={dense ? { textAlign: 'start', p: 0, minHeight: 32 } : {}}
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
