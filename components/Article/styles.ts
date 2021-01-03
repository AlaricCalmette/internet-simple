import { Card } from '@material-ui/core';
import styled from 'styled-components';

export const HoverableCard = styled(Card)`
    &:hover {
        box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.75);
        cursor: pointer;
    }`
;

export const UnstyledLink = styled.a`
    text-decoration: none;
    color: inherited;
`;
