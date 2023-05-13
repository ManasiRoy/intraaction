import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from './Layout'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const data = graphql`
  {
  allContentfulModulators {
    nodes {
      id
      modulatorsDescription {
        modulatorsDescription
      }
      modulatorsMaterial
      modulatorsName
      modulatorsRange
      modulatorsPdf {
        id
        url
        publicUrl
      }
    }
  }
}
`

const Modulators = () => {
    const modulatordata = useStaticQuery(data);
    const modulatorContent = modulatordata.allContentfulModulators.nodes;

    return (
        <>
            <Layout>
                <>
                    <div className="container mainSpacing">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active> MODULATORS</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="mainSpacing"><h1 className="text-center">MODULATORS / FREQUENCY SHIFTERS</h1></div>
                        <article>
                            <div className="row">
                                {modulatorContent.map(
                                    mcontent => (
                                        <div className="col-md-4 mb-5" key={mcontent.id}>
                                            <Card>
                                                <div className="pdfIcon">
                                                    <Link to={mcontent.modulatorsPdf.url} target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-pdf-fill"></i></Link>
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>{mcontent.modulatorsName}</Card.Title>
                                                    <Card.Text>
                                                        {mcontent.modulatorsDescription.modulatorsDescription}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-between">
                                                        <Table bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th>Acousto-Optic Material</th>
                                                                    <th>Wavelength Range</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><div className="item">{mcontent.modulatorsMaterial}</div></td>
                                                                    <td><div className="item">{mcontent.modulatorsRange}</div></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>


                                                    </div>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </div>

                        </article>

                    </div>
                </>
            </Layout>
        </>
    )
}

export default Modulators
