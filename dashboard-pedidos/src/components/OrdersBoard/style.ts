import styled from 'styled-components';

export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    > section {
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;

    button {
        background: #fff;
        border: 1px solid rgba(204, 204, 204, 0.4);
        border-radius: 8px;
        height: 128px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 4px;
        outline: none;

         strong {
            font-weight: 500;;
         }

         span {
            font-size: 14px;
            color: #666;
         }

        // elemento que precede um button for outro button
        & + button {
            margin-top: 24px;
        }
    }
`;
