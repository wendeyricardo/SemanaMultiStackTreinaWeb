import { experimentalStyled as styled} from '@material-ui/core/styles';

export const PageTitleContainer = styled('div')`
    ${({theme}) => theme.spacing(5) + ' ' + 0};
    text-align: center;

`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${ ({theme}) => theme.palette.primary.main};
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-weight: 600;

    ${({theme}) => theme.breakpoints.down('md')}{
        font-size: ${({theme}) => theme.typography.body1.fontSize};        
    }
`;

