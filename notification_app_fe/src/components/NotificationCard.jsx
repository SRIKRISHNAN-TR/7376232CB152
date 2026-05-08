import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

const NotificationCard = ({
  item,
  isRead,
  onClick,
}) => {
  const getColor = (type) => {
    switch (type) {
      case "Placement":
        return "success";

      case "Result":
        return "primary";

      case "Event":
        return "warning";

      default:
        return "default";
    }
  };

  return (
    <Card
      onClick={() => onClick(item.ID)}
      sx={{
        mb: 2,
        cursor: "pointer",
        opacity: isRead ? 0.6 : 1,
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">
            {item.Message}
          </Typography>

          <Chip
            label={item.Type}
            color={getColor(item.Type)}
          />
        </Stack>

        <Typography
          variant="body2"
          sx={{ mt: 1 }}
        >
          {new Date(
            item.Timestamp
          ).toLocaleString()}
        </Typography>

        {!isRead && (
          <Typography
            variant="caption"
            color="error"
          >
            Unread
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationCard;