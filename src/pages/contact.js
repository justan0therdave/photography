import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import ContactForm from '../components/contact-form'
import { Flex, Box } from 'grid-styled'

const ContactPage = ({ data }) => (
  <div>
    <Header
      title={'Contact ' + data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      location={data.site.siteMetadata.location}
      name={data.site.siteMetadata.name}
      fb={data.site.siteMetadata.fb}
      instagram={data.site.siteMetadata.instagram}
    />
    <Flex wrap direction='row'>
        <Box
            p={2}
        >
            <h2>Contact Chris</h2>
            <ContactForm />
        </Box>
    </Flex>
    <Footer />
  </div>
)

export default ContactPage

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title,
        description,
        location,
        name,
        fb,
        instagram
      }
    }
  }
`
