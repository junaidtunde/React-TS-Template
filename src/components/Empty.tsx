import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
    heading?: string;
    body?: string;
    children?: ReactNode;
};

const Empty = ({ heading, body, children }: Props) => (
    <div className='flex flex-grow align-center'>
        <Typography variant='h6'>{heading}</Typography>
        <Typography variant='body2' align='center'>
            {body}
        </Typography>
        <Typography variant='body1' component='div'>
            {children}
        </Typography>
    </div>
);

Empty.defaultProps = {
    heading: 'Nothing here',
    body: 'Come back later'
};

export default Empty;
