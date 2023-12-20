import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage } from "gatsby-plugin-image"

import "../css/home.css"

const HomeTemplate = ({ rubrik, bild, innehall }) => {
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
    <div className="image-container">
      <GatsbyImage image={bild.gatsbyImageData} alt={rubrik} />
      <div className="content-overlay">
        <h1 className="title display-1">{rubrik}</h1>
        <div className="content lead">{renderRichText(innehall, options)}</div>
      </div>
    </div>
  )
}

export default HomeTemplate