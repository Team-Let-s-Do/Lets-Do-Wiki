import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Image({ modId, type, imageUrl }) {
  return (
    <span>
      <img
        src={`/Lets-Do-Wiki/img/textures/${modId}/${type}/${imageUrl}`}
        style={{ imageRendering: 'pixelated', width: '28px', marginRight: '4px', marginBottom: "-8px" }}
      />
    </span>
  );
}

export default function 2IconList({ modId, list, type }) {
    return (
        <div>
            {list.map((item, index) => (
                <span key={index} style={{marginBottom: '4px'}}>
                    <Image modId={modId} type={type} imageUrl={item.imageId1}/>
                    <Image modId={modId} type={type} imageUrl={item.imageId2}/>
                    <span style={{fontWeight: 'bold'}}>{item.name}</span>
                    <span> - </span>
                    <span className="speckyInlineMarkdown"><ReactMarkdown>{item.description}</ReactMarkdown></span>
                    <span className="bigAssItemSpacer"></span>
                </span>
            ))}
        </div>
    );
}
