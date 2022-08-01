import { IconButton } from '@mui/material'
import { ReactElement } from 'react';

import './CustonIconButton.css'

interface Props {
    children: ReactElement;
    label: string;
    onClickCallback: any;
}

export function CustonIconButton({ children, label, onClickCallback }: Props) {
  return (
    <IconButton
            size="large"
            aria-label={label}
            color="inherit"
            onClick={() => {onClickCallback()}}
            >
                {children}
            </IconButton>
  )
}
