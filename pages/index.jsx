import Head from "next/head";
import styled from "styled-components";

const Body = styled.body`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
`;

const HomePage = () => {
  return (
    <Body>
      <Title>Pamith Ratnayake</Title>
      {/* <h1 className={styles.title}>Welcome Weary Traveler</h1>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h3>Who am I? &rarr;</h3>
              <p>Who am I but a droplet in the ocean?</p>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h3>Projects &rarr;</h3>
              <p>Find all my projects here</p>
            </a>
          </Link>
        </div> */}
    </Body>
  );
};

export default HomePage;