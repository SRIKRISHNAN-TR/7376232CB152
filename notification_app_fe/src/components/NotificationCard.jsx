import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";


import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";


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
        mb: 2.5,
        borderRadius: 4,
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",


        opacity: isRead ? 0.75 : 1,


        transition:
          "all 0.3s ease-in-out",


        boxShadow: isRead
          ? "0px 2px 8px rgba(0,0,0,0.08)"
          : "0px 6px 18px rgba(0,0,0,0.12)",


        borderLeft: `6px solid ${
          item.Type === "Placement"
            ? "#2e7d32"
            : item.Type === "Result"
            ? "#1976d2"
            : "#ed6c02"
        }`,


        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            "0px 10px 24px rgba(0,0,0,0.18)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          <Box>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <NotificationsActiveIcon
                color={getColor(item.Type)}
                fontSize="small"
              />


              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textTransform:
                    "capitalize",
                }}
              >
                {item.Message}
              </Typography>
            </Stack>


            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                color: "text.secondary",
              }}
            >
              {new Date(
                item.Timestamp
              ).toLocaleString()}
            </Typography>
          </Box>


          <Chip
            label={item.Type}
            color={getColor(item.Type)}
            sx={{
              fontWeight: 600,
              px: 1,
            }}
          />
        </Stack>


        {!isRead && (
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent:
                "flex-end",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                backgroundColor:
                  "#ffebee",
                color: "#d32f2f",
                px: 1.5,
                py: 0.5,
                borderRadius: 5,
                fontWeight: 600,
              }}
            >
              Unread
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};


export default NotificationCard;



