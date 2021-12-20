import * as React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

const NavWrapper = styled.div``
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  border-bottom: 1px solid gray;
`
const Links = styled.div`
  display: flex;
`
const CustomLink = styled(Link)`
  color: black;
  margin-right: 20px;
  transition: 0.5s;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`
const Logo = styled(Link)`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
`
const TestContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allNotion {
        edges {
          node {
            title
            createdAt
            markdownString
          }
        }
      }
    }
  `)
  console.log(
    data.allNotion.edges.forEach((ele) => console.log(ele.node.markdownString))
  )
  return (
    <>
      <NavWrapper>
        <NavContainer>
          <Logo />
          <Links>
            <CustomLink>Archive</CustomLink>
            <CustomLink>Category</CustomLink>
            <CustomLink>About</CustomLink>
          </Links>
        </NavContainer>
      </NavWrapper>
      <TestContainer>
        article list:
        {data.allNotion.edges.map((ele) => (
          <ReactMarkdown source='### hello'>
            {ele.node.markdownString}
          </ReactMarkdown>
        ))}
      </TestContainer>
    </>
  )
}

export default IndexPage
