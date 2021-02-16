import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import useInterval from '@use-it/interval'

const rotate1 = keyframes`
  50%, 100% {
    transform: rotateZ(180deg);
  }

`
const rotate2 = keyframes`
    0%, 50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(180deg);
  }

`

const marker = keyframes`
    100% {
    transform: rotateZ(360deg);
  }

`
const rotate = keyframes`
    100% {
    transform: rotateZ(360deg);
  }

`

const Wrapper = styled.div`
    position: absolute;
    width: 4em;
    height: 4em;
    left: calc(50% - 2em);

    &::after {
        content: '';
        background: #fff;
        border-radius: 50%;
        width: 3em;
        height: 3em;
        position: absolute;
        top: 0.5em;
        left: 0.5em;
    }

    .dial-container {
        position: absolute;
        top: 0;
        bottom: 0;
        overflow: hidden;
        width: 2em;
    }
    .wedge {
        animation: ${rotate} 3s infinite linear;
        border-radius: 0 4em 4em 0;
        background: red;
        width: 2em;
        height: 4em;
        transform-origin: 0% 50%;
    }
    .container1 {
        left: 2em;
    }
    .container1 .wedge {
        animation: ${rotate1} 3s infinite linear;
        border-radius: 0 4em 4em 0;
        left: 0;
        transform-origin: 0 50%;
    }
    .container2 {
        left: 0;
    }
    .container2 .wedge {
        animation: ${rotate2} 3s infinite linear;
        border-radius: 4em 0 0 4em;
        transform-origin: 2em 2em;
    }

    .marker {
        background: green;
        border-radius: 50%;
        height: 0.5em;
        width: 0.5em;
        position: absolute;
        top: 0;
        left: calc(50% - 0.25em);
    }
    .end {
        animation: ${marker} 3s infinite linear;
        transform-origin: 50% 2em;
    }
`

const Dial = () => {
    return (
        <Wrapper className="wrapper">
            <div className="dial-container container1">
                <div className="wedge"></div>
            </div>
            <div className="dial-container container2">
                <div className="wedge"></div>
            </div>
            <div className="marker start"></div>
            <div className="marker end"></div>
        </Wrapper>
    )
}

const StyledStarter = styled.div`
    position: ab;
    font-family: 'Alfa Slab One', cursive;
    font-size: 8rem;

    .dial-container {
    }
`

const StartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
    </svg>
)

const Starter = () => {
    const [time, setTime] = useState(3)
    const [delay, setDelay] = useState(null)

    useInterval(() => {
        setTime(time - 1)
    }, delay)

    useEffect(() => {
        if (time < 0) {
            setDelay(null)
            setTime(3)
        }
    }, [time])

    return (
        <StyledStarter>
            <div className="dial-container">
                <Dial />
            </div>
            <div>{time}</div>
            <button onClick={() => setDelay(1000)}>
                <StartIcon />
            </button>
        </StyledStarter>
    )
}

export default Starter
