import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <main className="home-page">
      <Container maxW="6xl" className="home-shell">
        <section className="home-intro" aria-label="About Vartalap">
          <div className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">v.</span>
            <Text className="brand-name">Vartalap</Text>
          </div>
          <Text as="p" className="home-eyebrow">A little closer, wherever you are.</Text>
          <Text as="h1" className="home-title">
            Good conversations <span>start here.</span>
          </Text>
          <Text as="p" className="home-description">
            A calm space for the people and conversations that matter. Catch up,
            share a thought, and keep the connection going.
          </Text>
          <div className="home-note">
            <span className="online-dot" />
            Simple, private conversations in real time
          </div>
        </section>

        <Box className="auth-card">
          <Text as="h2" className="auth-title">Welcome</Text>
          <Text as="p" className="auth-subtitle">Sign in or create an account to continue.</Text>
          <Tabs isFitted variant="soft-rounded" className="auth-tabs">
            <TabList className="auth-tab-list">
              <Tab className="auth-tab">Log in</Tab>
              <Tab className="auth-tab">Create account</Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0} pb={0}>
                <Login />
              </TabPanel>
              <TabPanel px={0} pb={0}>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </main>
  );
}

export default Homepage;
