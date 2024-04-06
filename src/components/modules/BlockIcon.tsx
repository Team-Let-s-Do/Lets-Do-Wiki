import React from 'react';
import ReactMarkdown from 'react-markdown';

export function BlockImage({ modId, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/block/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '50px', marginRight: '4px', marginBottom: "-5px" }}
      />
    </span>
  );
}

export default function BlockIcon({ modId, imageId, description }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center' }}>
            <BlockImage modId={modId} imageUrl={imageId} />
            <span className="speckyInlineMarkdown" style={{ marginLeft: '8px' }}>
                <ReactMarkdown>{description}</ReactMarkdown>
            </span>
        </div>
    );
}