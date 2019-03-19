import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import system from 'system-components'
import Header from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'
import { Text } from '../components/Primitives'
import { Title, Subtitle, Paragraph } from '../components/Typography'
import { themeHover } from '../utils/styles'

const HeaderLink = system({ is: 'a' }, themeHover)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(limit: 1) {
        edges {
          node {
            title
            description
            website
            repo
          }
        }
      }
    }
  `)

  return (
    <article>
      <Header>
        <Title>Hi! I&rsquo;m Alec&nbsp;Lomas.</Title>

        <Subtitle my={3}>
          I&rsquo;m a frontend developer currently{' '}
          <HeaderLink href="mailto:alec@lowmess.com?subject=Let's%20Work%20Together">
            seeking new&nbsp;opportunities
          </HeaderLink>
          .
        </Subtitle>

        <Paragraph fontSize={[2, 3]} mt={3} mb={4}>
          My goal is to create beautiful websites and rich interactions without
          sacrificing usability. I care deeply about legibility, performance,
          and the open web. And&nbsp;burritos.
        </Paragraph>
      </Header>

      <main>
        <Text
          is="h2"
          fontSize={[3, 4]}
          fontWeight="7"
          lineHeight="title"
          mt={5}
          mb={4}
        >
          Latest Project
        </Text>

        <ProjectPreview
          project={data.allProjectsJson.edges[0].node}
          level="h3"
        />
      </main>
    </article>
  )
}

export default IndexPage
