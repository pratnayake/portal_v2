import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const TitleCard = styled.div`
  padding: 5rem 0;
`;

const CardContainer = styled.div``;

const Card = styled.div`
  width: 100px;
  height: 100px;
  border: 15px black;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled.a`
  text-decoration: none;
  color: inherit;
`

const HomePage = () => {
  return (
    <>
      <TitleCard>
        <h1>Pamith Ratnayake</h1>
      </TitleCard>
      <CardContainer>
        <Card>
          <Link href="/portfolio">
            <LinkText>
              <h3>Portfolio</h3>
              <p>Stuff that came out of my brain</p>
            </LinkText>
          </Link>
        </Card>
      </CardContainer>
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
    </>
  );
};

export default HomePage;
