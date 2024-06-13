import styled from "styled-components";

export const AstroContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 34px;
    height: 257px;
`

export const SunContainer = styled.div`
    position: relative;
`

export const MoonContainer = styled.div`
    position: relative;
    border-left: 1px solid #BCBCBC;
    padding-left: 18px;
`

export const AstroTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const AstroDataContainer = styled.div`

    .astroParent {
        margin-top: 20px;
        margin-left: 68px;
    }

    @property --p {
        syntax: '<number>';
        inherits: true;
        initial-value: 0;
    }

    .pie {
        --p: 20;
        --b: 22px;
        --c: darkred;
        --w: 150px;

        width: var(--w);
        aspect-ratio: 1;
        position: relative;
        display: inline-grid;
        margin: 5px;
        place-content: center;
        font-size: 25px;
        font-weight: bold;
        font-family: sans-serif;
    }

    .pie:before,
    .pie:after {
        content: "";
        position: absolute;
        border-radius: 50%;
    }

    .pie:before {
        inset: 0;
        background:
            radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
            conic-gradient(var(--c) calc(var(--p)*1%), #0000 0);
        -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
        mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
    }

    .pie:after {
        inset: calc(50% - var(--b)/2);
        background: var(--c);
        transform: rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
    }

    .animate {
        animation: p 1s .5s both;
    }

    @keyframes p {
        from {
            --p: 0
        }
    }

    .astroLine {
        width: fit-content;
        border-radius: 0 50% 50% 0;
        transform: rotate(-90deg);
        position: absolute;
    }
`

export const AstroApiData = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;

    .astroHour {
        text-align: center;

        .astroTxt {
            display: block;
            font-size: 12px;
            font-weight: 400;
        }

        .astroTime {
            display: block;
            font-size: 14px;
            font-weight: 600;
        }
    }
`