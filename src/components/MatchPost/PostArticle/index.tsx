/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './styles';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import COLORS from '../../../assets/color';
import Slider from 'react-slick';
import Tim from '../../../images/components/MatchPost/Tim.svg';
import ProfileDefault from '../../../images/components/MatchPost/profileDefault.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../assets/slick.css';
import ArticleArrow from '../../../images/components/MatchPost/ArticleArrow.webp';
import PurpleKebap from '../../../images/components/MatchPost/purpleKebap.svg';

export default function MatchPostArticle() {
  const [isPurpleKebapOpen, setIsPurpleKebapOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom2',
  };
  const dateOption = ['0000-00-00-오전', '0000-00-00-오후', '0000-00-00-오후'];
  return (
    <div>
      <s.MatchArticleWrapper>
        <s.ArticleTitleSection css={{ position: 'relative' }}>
          <div
            css={css`
              display: flex;
              flex: 1 1 auto;
              font-size: 24px;
              font-weight: 900;
            `}
          >
            게시글 명 게시글 명 게시글 공백포함 최대 30자까지
          </div>
          <img
            css={css`
              margin: 6px;
            `}
            src={ProfileDefault}
            alt="defaultImage"
          />
          <div
            css={css`
              font-size: 20px;
              color: #797979;
              font-weight: 900;
              margin: 6px;
            `}
          >
            닉네임123123{' '}
          </div>
          <div
            css={css`
              margin: 6px;
              border-left: 1px solid #c9c9c9;
              height: 20px;
              box-sizing: border-box;
              padding-left: 0.5rem;
              font-size: 20px;
              font-weight: 500;
              color: #797979;
            `}
          >
            7시간 전{' '}
          </div>
          <img
            onClick={() => {
              setIsPurpleKebapOpen(!isPurpleKebapOpen);
            }}
            css={{
              margin: 6,
              cursor: 'pointer',
            }}
            src={PurpleKebap}
            alt="ellipsis"
          />
          <div
            css={{
              position: 'absolute',
              top: '3.3rem',
              right: '-0.4rem',
              border: `1.5px solid ${COLORS.Gray2}`,
              borderRadius: '10px',
              background: 'white',
              boxSizing: 'border-box',
              width: 56,
              height: 102,
              display: isPurpleKebapOpen ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div css={postOption1}>수정</div>
            <div css={postOption2}>삭제</div>
            <div css={postOption3}>신고</div>
          </div>
        </s.ArticleTitleSection>
        <s.ArticleDateSection>
          <div
            css={css`
              flex: 1 1 auto;
              font-size: 20px;
              font-weight: 900;
              color: ${COLORS.Gray3};
            `}
          >
            관람희망날짜
          </div>
          {dateOption.map(day => (
            <div css={ArticleDateCss}>{day}</div>
          ))}
        </s.ArticleDateSection>

        <s.ArticlePlaceTogoSection>
          <div
            css={css`
              flex: 0 1 250px;
              font-size: 20px;
              font-weight: 900;
              color: ${COLORS.Gray3};
            `}
          >
            가고 싶은 전시회
          </div>
          <div
            css={css`
              font-size: 20px;
              font-weight: 500;
              color: ${COLORS.Gray3};
            `}
          >
            뚝섬 미술관 인사이드미 전시회
          </div>
        </s.ArticlePlaceTogoSection>

        <s.ArticleTextSection>
          <ArticleImageSlider {...settings}>
            <img src={Tim} alt="tempo"></img>
            <img src={Tim} alt="tempo"></img>
            <img src={Tim} alt="tempo"></img>
          </ArticleImageSlider>
          <s.ArticleArrowWrapper>
            <img
              css={css`
                max-width: 22px;
                max-height: 22px;
              `}
              src={ArticleArrow}
              alt="article-arrow"
            />
          </s.ArticleArrowWrapper>
          <text
            css={css`
              color: ${COLORS.Gray3};
              font-size: 20px;
              margin: -3px 1.6rem;
              line-height: 1.4;
            `}
          >
            게시글 본문 입니다. 오늘은 등 운동 했습니다.게시글 본문 입니다. 오늘은 등 운동 했습니다.
          </text>
        </s.ArticleTextSection>
      </s.MatchArticleWrapper>
    </div>
  );
}

export const ArticleDateCss = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 56px;
  background: ${COLORS.Gray1};
  border-radius: 10px;
  margin: 0.5rem;
  color: ${COLORS.Gray3};
  font-size: 18px;
  border: 1px solid ${COLORS.Gray2};
`;

export const ArticleImageSlider = styled(Slider)`
  box-sizing: border-box;
  width: 233px;
  height: 320px;
  border-radius: 10px;
`;

export const postOption1 = css({
  //수정
  position: 'relative',
  cursor: 'pointer',
  top: 2,
  fontSize: 18,
  padding: '6px',
  borderBottom: `1px solid ${COLORS.Gray2}`,
  color: COLORS.Gray3,
  '&:hover': { color: COLORS.main79, scale: '1.04' },
});
export const postOption2 = css({
  //삭제(idx=2)
  position: 'relative',
  cursor: 'pointer',
  top: 2,
  fontSize: 18,
  padding: '6px',
  borderBottom: `1px solid ${COLORS.Gray2}`,
  color: COLORS.Gray3,
  '&:hover': { color: COLORS.main79, scale: '1.04' },
});
export const postOption3 = css({
  //신고
  position: 'relative',
  cursor: 'pointer',
  top: 2,
  fontSize: 18,
  padding: '6px',
  borderBottom: `1px solid ${COLORS.Gray2}`,
  color: COLORS.Gray3,
  '&:hover': { color: 'red', scale: '1.04' },
});
