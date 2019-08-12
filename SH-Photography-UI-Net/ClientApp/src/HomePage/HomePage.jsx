/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PhotoGallery } from './../_components/PhotoGallery';
import MetaTags from 'react-meta-tags';

class HomePage extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <MetaTags>
          <title>Stuart Hopwood Photography Home</title>
          <meta property="og:title" content="A Photography Portfolio and Client Portal."/>
          <meta name="description" content="Featured photos from Stuart Hopwood Photography."/>
        </MetaTags>
        <PhotoGallery
          margin={5}
          albumId={
            'AAG2u85M3p2Dny9K9WWUMtiVA-XauFLdb_6oaXbqdc7V0wST2DpiEzk9kgZYHQpduvOoXUbMFsl1'
          }
        />
      </div>
    );
  }
}

const connectedHomePage = connect()(HomePage);
export { connectedHomePage as HomePage };
