import React from 'react';
import { PageTitleContainer, PageTitleStyled} from './PageTitle.style'

interface PageTifleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTifleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{props.title}</PageTitleStyled>
            {props.subtitle}
        </PageTitleContainer>
    );
}

export default PageTitle;