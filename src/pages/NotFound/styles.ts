/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import COLORS from '../../assets/color';
import { relative } from 'path';
import { Column } from '../Posting/styles';
export const NotFound = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '& img': { width: 150, height: 150, position: 'fixed', left: 100, top: 30 },
  '@media (max-width:600px)': {
    bottom: 30,
    alignItems: 'center',
    '& img': { width: 120, height: 120, position: 'fixed', left: 'calc(50% - 65px)', top: 120 },
    '& div': {
      fontSize: 24,
      margin: 10,
    },
    '& span': { fontWeight: 600, fontSize: 12 },
  },
});

export const toHomeText = css({
  position: 'relative',
  color: COLORS.white,
  fontWeight: 700,
  borderRadius: 10,
  background:COLORS.main79,
  border: `2px solid ${COLORS.main100}`,
  padding: '20px 26px',
  fontSize: 29,
  userSelect: 'none',
  cursor: 'pointer',
  right: 8,
  marginTop: 30,
  '@media (max-width:600px)': { fontSize: 16, right: 4, marginTop: 50, bottom: 50 },
});