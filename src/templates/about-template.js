import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutTemplate = ({ rubrik, bild, innehall }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: children => {
        return (
          <div className="divCenteredText">
            <h3>{children}</h3>
          </div>
        )
      },
    },
  }

  return (
    <main>
      <GatsbyImage image={bild.gatsbyImageData} alt={rubrik} />
      <h1>{rubrik}</h1>
      {/* Använd 'innehall' för att visa rich text-innehållet */}
      <div>{renderRichText(innehall, options)}</div>
    </main>
  )
}

export default AboutTemplate