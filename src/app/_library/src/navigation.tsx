import ListIcon from "@mui/icons-material/List";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const navigation = [
  { href: "/top", label: "トップ", icon: <ListIcon fontSize="large" /> },
  {
    href: "/todo/create",
    label: "新規作成",
    icon: <PlaylistAddIcon fontSize="large" />,
  },
  {
    href: "/user",
    label: "アカウント",
    icon: <AccountCircleIcon fontSize="large" />,
  },
];
