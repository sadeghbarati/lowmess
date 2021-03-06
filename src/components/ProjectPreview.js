import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { Box, Heading } from 'rebass'
import ArrowLink from './ArrowLink'
import { Paragraph } from './Typography'
import { themeHover } from '../utils/styles'
import unwidow from '../utils/unwidow'

const ProjectTitle = ({ children, ...props }) => {
  const styles = css`
    display: inline-block;

    ${themeHover};
  `

  return (
    <Heading
      my={0}
      fontSize={[2, 3]}
      fontWeight="bold"
      lineHeight="title"
      css={styles}
      {...props}
    >
      {children}
    </Heading>
  )
}

ProjectTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

const ProjectPreview = ({ project, level, ...props }) => (
  <Box {...props}>
    <a href={project.website ? project.website : project.repo}>
      <ProjectTitle as={level}>{unwidow(project.title)}</ProjectTitle>
    </a>

    <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
      {unwidow(project.description)}
    </Paragraph>

    {project.website && (
      <Box
        {...(project.website && project.repo ? { mr: 4 } : {})}
        css="display: inline-block"
      >
        <ArrowLink dest={project.website} external={true}>
          Website
        </ArrowLink>
      </Box>
    )}

    {project.repo && (
      <Box css="display: inline-block">
        <ArrowLink dest={project.repo} external={true}>
          Repository
        </ArrowLink>
      </Box>
    )}
  </Box>
)

export const projectPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  repo: PropTypes.string,
  website: PropTypes.string,
})

ProjectPreview.propTypes = {
  project: projectPropType.isRequired,
  level: PropTypes.string.isRequired,
}

export default ProjectPreview
