import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Button } from "react-bootstrap";

const data = graphql`
  {
  allContentfulHome {
    nodes {
      buttonName {
        id
        key
        value
      }
      contentHome {
        raw
      }
      banner {
        title
        publicUrl
      }
    }
  }
}
`

const FrontPage = () => {
    const homedata = useStaticQuery(data);
    const banner = homedata.allContentfulHome.nodes[0];
    const btn = banner.buttonName;
    const headerBanner = banner.banner;

    return (
        <>
            <section className="banner-wrap">
                <figure>
                    <img src={headerBanner.publicUrl} alt="banner" />
                    <div className="banner-txt-wrap"><h1>Welcome to IntraAction Corp.</h1></div>
                </figure>
            </section>
            <section className="mainSpacing frontpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 align-self-center">
                            <article>
                                {renderRichText(banner.contentHome, options)}
                            </article>
                        </div>
                        <div className="container d-flex flex-wrap">
                            {btn.map(
                                b => (<div className="m-2" > <Link to={b.value}><Button href={btn.value} key={b.id} size="lg">{b.key}</Button></Link> </div>)
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
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
        [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
        },
    },
}
export default FrontPage
