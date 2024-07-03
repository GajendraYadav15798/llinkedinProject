import axios from "axios";

const PROJECT_ID = "f104bi07c490";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};

export const getHeaderWithProjectIDAndBody = () => {
  return {
    headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
  };
};

export const getAuthHeaderConfig = () => {
  const token = localStorage.getItem("authToken"); // Corrected spelling here
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        projectID: PROJECT_ID,
      },
    };
  } else {
    return {
      error: "user not logged in",
    };
  }
};

export const getProfileById = async (id) => {
  const headers = getHeaderWithProjectId();
  const authConfig = getAuthHeaderConfig();
  try {
    const res = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/user/${id}`,
      { headers: { ...authConfig.headers, ...headers.headers } } // Corrected the way headers are passed
    );
    return res.data.data;
  } catch (error) {
    return error;
  }
};
