import {
  useEffect,
  useState,
} from "react";


import {
  Container,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";


import { fetchNotifications } from "../api/notifications";


import { sortByPriority } from "../utils/priorityHelper";


import NotificationCard from "../components/NotificationCard";


const Home = () => {
  const [notifications, setNotifications] =
    useState([]);


  const [loading, setLoading] =
    useState(true);


  const [filter, setFilter] =
    useState("All");


  const [readItems, setReadItems] =
    useState([]);


  useEffect(() => {
    loadNotifications();
  }, []);


  const loadNotifications = async () => {
    setLoading(true);


    const data =
      await fetchNotifications();


    const sorted =
      sortByPriority(data);


    setNotifications(sorted);


    setLoading(false);
  };


  const handleRead = (id) => {
    setReadItems((prev) => [
      ...prev,
      id,
    ]);
  };


  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === filter
        );


  return (
    <Container sx={{ mt: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4">
          Priority Inbox
        </Typography>


        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>
            Filter
          </InputLabel>


          <Select
            value={filter}
            label="Filter"
            onChange={(e) =>
              setFilter(
                e.target.value
              )
            }
          >
            <MenuItem value="All">
              All
            </MenuItem>


            <MenuItem value="Placement">
              Placement
            </MenuItem>


            <MenuItem value="Result">
              Result
            </MenuItem>


            <MenuItem value="Event">
              Event
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>


      {loading ? (
        <CircularProgress />
      ) : (
        filteredNotifications.map(
          (item) => (
            <NotificationCard
              key={item.ID}
              item={item}
              isRead={readItems.includes(
                item.ID
              )}
              onClick={handleRead}
            />
          )
        )
      )}
    </Container>
  );
};


export default Home;



