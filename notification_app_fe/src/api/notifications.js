import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmlrcmlzaG5hbi5jYjIzQGJpdHNhdGh5LmFjLmluIiwiZXhwIjoxNzc4MjM0NzYxLCJpYXQiOjE3NzgyMzM4NjEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxOWU4ZTQ1Ni1lYjJjLTQwZDEtODNjMC05ZWE0ZDM1NDAzZTMiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzcmlrcmlzaG5hbiB0ciIsInN1YiI6IjJhZDIyOTcxLTA5OTUtNGM2Yi04YzlmLWFmMjk2YjI2ZGMyNiJ9LCJlbWFpbCI6InNyaWtyaXNobmFuLmNiMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoic3Jpa3Jpc2huYW4gdHIiLCJyb2xsTm8iOiI3Mzc2MjMyY2IxNTIiLCJhY2Nlc3NDb2RlIjoidUthSmZtIiwiY2xpZW50SUQiOiIyYWQyMjk3MS0wOTk1LTRjNmItOGM5Zi1hZjI5NmIyNmRjMjYiLCJjbGllbnRTZWNyZXQiOiJtZ2tRZ2dyV3RFcXhkRkF6In0.bz7y5Mu1cES9iN3wSbMBCvjdEnBmQXdWst8H6ff1M4c";

    const response = await axios.get(
      `${BASE_URL}/notifications`,
      {
        params: {
          page,
          limit,
          notification_type:
            type || undefined,
        },

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.notifications;
  } catch (error) {
    console.log(error);
    return [];
  }
};