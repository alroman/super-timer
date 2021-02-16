import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import useInterval from '@use-it/interval'
import Starter from './dial'
import superLogo from '../images/logo.png'

// styles
const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const StyledTimer = styled.div`
    font-family: 'Alfa Slab One', cursive;
    font-size: 8rem;
`

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .logo img {
        max-width: 200px;
        margin-bottom: 40px;
    }
    .transports {
        margin-top: 40px;
    }
    button {
        margin: 0;
        padding: 0;
        background: transparent;
        border: 0;
    }
`

const printTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(14, 5)

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

const PauseIcon = () => (
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
        <line x1="10" y1="15" x2="10" y2="9"></line>
        <line x1="14" y1="15" x2="14" y2="9"></line>
    </svg>
)

const StopIcon = () => (
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
        <rect x="9" y="9" width="6" height="6"></rect>
    </svg>
)

const IndexPage = () => {
    const [time, setTime] = useState(0)
    const [delay, setDelay] = useState(null)

    useInterval(() => {
        setTime(time + 1)
    }, delay)

    return (
        <main style={pageStyles}>
            <title>Super Timer</title>
            <StyledApp>
                <div className="logo">
                    <img src={superLogo} alt="Superman Logo" />
                </div>
                <StyledTimer>{printTime(time)}</StyledTimer>
                <div className="transports">
                    {time === 0 && delay === null ? (
                        <button onClick={() => setDelay(1000)}>
                            <StartIcon />
                        </button>
                    ) : (
                        <div>
                            {delay === null ? (
                                <button onClick={() => setDelay(1000)}>
                                    <StartIcon />
                                </button>
                            ) : (
                                <button onClick={() => setDelay(null)}>
                                    <PauseIcon />
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    setTime(0)
                                    setDelay(null)
                                }}
                            >
                                <StopIcon />
                            </button>
                        </div>
                    )}
                </div>
            </StyledApp>
        </main>
    )
}

export default IndexPage
