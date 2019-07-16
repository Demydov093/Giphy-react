import React from 'react';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResult ({ result }) {
    const { thumbnail } = result;
    return (
        <div className="Hello">
          <img src={thumbnail}/>
        </div>
    );
}

SearchResult.propTypes = {
    result: CustomTypes.SearchResult,
}
