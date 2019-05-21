import React from "react"

import BlogPostList from '../components/BlogPostList'
import Layout from '../components/Layout'
import JobSearch from '../components/JobSearch'
import Title from '../components/Title'
import SEO from '../components/Seo'
import WorkLists from '../components/WorkLists'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title/>
    <JobSearch/>
    <BlogPostList/>
    <WorkLists/>
  </Layout>
)

export default IndexPage
