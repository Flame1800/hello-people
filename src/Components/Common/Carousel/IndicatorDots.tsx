import React from 'react'

function Dot({selected}) {
    return (
        <span
            style={{
                display: 'inline-block',
                height: '8px',
                width: '8px',
                borderRadius: '4px',
                backgroundColor: 'white',
                margin: '7px 5px',
                opacity: selected ? '1' : '0.3',
                transitionDuration: '300ms'
            }}
        />
    )
}

export default function IndicatorDots({total, index}) {
    const wrapperStyle = {
        position: 'absolute',
        width: '100%',
        zIndex: '100',
        bottom: '5px',
        textAlign: 'center'
    }

    if (total < 2) {
        // Hide dots when there is only one dot.
        return <div style={wrapperStyle}/>
    }
    return (
        <div style={wrapperStyle}>
            {/* eslint-disable-next-line prefer-spread */}
            {Array.apply(null, Array(total)).map((x, i) => {
                return <Dot key={i} selected={index === i}/>
            })}
        </div>
    )
}
